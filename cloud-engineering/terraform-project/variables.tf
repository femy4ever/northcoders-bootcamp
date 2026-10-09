variable "vpc_cidr_block" {
  type = string
}
variable "public_subnets" {
  type = list(string)
}
variable "availability_zone" {
  type = list(string)
}
variable "private_subnets" {
  type = list(string)
}
variable "instance_type" {
  type = string
}
variable "Hash_Key_type" {
  type    = string
  default = "N"
}
variable "Hash_Key" {
  type = string
}
variable "target_group_name" {
  type = string
}
variable "desired_capacity" {
  type = number
}
variable "max_size" {
  type = number
}
variable "min_size" {
  type = number
}
variable "port_number" {
  type    = number
}
# variable "ami_ids" {
#   type = list(string)
# }