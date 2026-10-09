data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "app_server_001" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  key_name = "General_key"
  vpc_security_group_ids = ["sg-07cc80649486ca180"]
  subnet_id = "subnet-00cef5d8005801fee"
  associate_public_ip_address = true

  tags = {
    Name = "app_server_001"
  }
}

resource "aws_instance" "app_server_002" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  key_name = "General_key"
  vpc_security_group_ids = ["sg-07cc80649486ca180"]
  subnet_id = "subnet-00cef5d8005801fee"
  associate_public_ip_address = true

  tags = {
    Name = "app_server_002"
  }

}