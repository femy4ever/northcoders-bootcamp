terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "eu-west-2"
}

resource "aws_instance" "app_server" {
  ami                    = "ami-0564741aa332d1168"
  instance_type          = "t2.micro"
  vpc_security_group_ids = ["sg-0955f51a4ab06c707"]
  subnet_id              = "subnet-00e20a7841d17016a"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}
