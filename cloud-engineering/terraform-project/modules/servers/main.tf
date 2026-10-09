data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "Lighting" {
  instance_type               = var.instance_type
  subnet_id                   = var.public_subnets[0]
  vpc_security_group_ids      = var.security_group_ids
  ami                         = data.aws_ami.ubuntu.id
  associate_public_ip_address = true
  key_name                    = "kp-nc1" 
  tags = {
    name = "Lighting_server"
  } 
}
resource "aws_instance" "Heating" {
  instance_type               = var.instance_type
  subnet_id                   = var.public_subnets[0]
  vpc_security_group_ids      = var.security_group_ids
  ami                         = data.aws_ami.ubuntu.id
  associate_public_ip_address = true
  key_name                    = "kp-nc1" 
  tags = {
    name = "Heating_server"
  } 
}
resource "aws_instance" "Status" {
  instance_type               = var.instance_type
  subnet_id                   = var.public_subnets[0]
  vpc_security_group_ids      = var.security_group_ids
  ami                         = data.aws_ami.ubuntu.id
  associate_public_ip_address = true
  key_name                    = "kp-nc1" 
  tags = {
    name = "Status_server"
  }
}

resource "aws_instance" "Auth" {
  instance_type               = var.instance_type
  subnet_id                   = var.private_subnets[0]
  vpc_security_group_ids      = var.security_group_ids
  ami                         = data.aws_ami.ubuntu.id
  key_name                    = "kp-nc1" 
  tags = {
    name = "Auth_server"
  } 
}