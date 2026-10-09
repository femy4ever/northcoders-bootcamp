resource "aws_vpc" "shn" {
  cidr_block           = var.vpc_cidr_block
  enable_dns_hostnames = true

  tags = {
    name = "smart_home_network_VPC"
  }
}

resource "aws_subnet" "public_subnets" {
  count                   = length(var.public_subnets)
  vpc_id                  = aws_vpc.shn.id
  availability_zone       = var.availability_zone[count.index]
  cidr_block              = var.public_subnets[count.index]
  map_public_ip_on_launch = true

  tags = {
    name = "public_subnets"
  }
}
resource "aws_subnet" "private_subnets" {
  count             = length(var.private_subnets)
  vpc_id            = aws_vpc.shn.id
  availability_zone = var.availability_zone[count.index]
  cidr_block        = var.private_subnets[count.index]

  tags = {
    name = "private_subnets"
  }
}
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.shn.id

  tags = {
    name = "internet_gateway"
  }
}
resource "aws_eip" "elastic_ip" {
  domain = "vpc"

  tags = {
    name = "natGateway_elasticIP"
  }
}
resource "aws_nat_gateway" "NAT_Gateway" {
  allocation_id = aws_eip.elastic_ip.id
  subnet_id     = aws_subnet.public_subnets[0].id
  depends_on    = [aws_internet_gateway.igw]

  tags = {
    name = "Nat_Gateway"
  }
}
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.shn.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    name = "public_route_table"
  }
}
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.shn.id
  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.NAT_Gateway.id
  }

  tags = {
    name = "private_route_table"
  }
}
resource "aws_route_table_association" "public_routes" {
  count          = length(aws_subnet.public_subnets[*])
  route_table_id = aws_route_table.public.id
  subnet_id      = aws_subnet.public_subnets[count.index].id
}
resource "aws_route_table_association" "private_routes" {
  count          = length(aws_subnet.private_subnets[*])
  route_table_id = aws_route_table.private.id
  subnet_id      = aws_subnet.private_subnets[count.index].id
}