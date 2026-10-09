variable "target_group_name" {
  type        = string
}
variable "vpc_id" {
  type = string
}

variable "server_ids" {
  type = list(string)
}
variable "public_subnets" {
  type = list(string)
}
variable "private_subnets" {
  type = list(string)
}
variable "security_group_ids" {
  type    = list(string)
}
variable "port_number" {
  type    = number
}