resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = "true"
  tags = {
    Name = "tutorial vpc"
  }
}

resource "aws_subnet" "public" {
  count             = length(var.availability_zone_names)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.public_cidr_ranges[count.index]
  availability_zone = var.availability_zone_names[count.index]

  tags = {
    Name = "${var.vpc_name}_public_${var.availability_zone_names[count.index]}"
  }
}
resource "aws_subnet" "private" {
  count             = length(var.availability_zone_names)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_cidr_ranges[count.index]
  availability_zone = var.availability_zone_names[count.index]

  tags = {
    Name = "${var.vpc_name}_private_${var.availability_zone_names[count.index]}"
  }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
}

resource "aws_route_table_association" "public-assosiation" {
  count = length(var.availability_zone_names)
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}