variable "vpc_name" {
  type    = string
  default = "tutorial-vpc"
}

variable "availability_zone_names" {
  type    = list(string)
  default = ["eu-west-2a", "eu-west-2b", "eu-west-2c"]
}

variable "public_cidr_ranges" {
  type    = list(string)
  default = ["10.0.0.0/20", "10.0.16.0/20", "10.0.32.0/20"]
}
variable "private_cidr_ranges" {
  type    = list(string)
  default = ["10.0.128.0/20", "10.0.144.0/20", "10.0.160.0/20"]
}


