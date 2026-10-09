variable "availability_zone" {
  type = list(string)
}
variable "public_subnets" {
  type = list(string)
}
variable "private_subnets" {
  type = list(string)
}
variable "instance_type" {
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
variable "ami_ids" {
  type = list(string)
}
variable "public_target_group_arns" {
  type = list(string)

}
variable "private_target_group_arns" {
  type = list(string)
}