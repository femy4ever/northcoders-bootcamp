resource "aws_ami_from_instance" "lighting_server_ami" {
  name               = "lighting_server_ami"
  source_instance_id = var.server_ids[0]
}
resource "aws_ami_from_instance" "heating_server_ami" {
  name               = "heating_server_ami"
  source_instance_id = var.server_ids[1]
}
resource "aws_ami_from_instance" "status_server_ami" {
  name               = "status_server_ami"
  source_instance_id = var.server_ids[2]
}
resource "aws_ami_from_instance" "auth_server_ami" {
  name               = "auth_server_ami"
  source_instance_id = var.server_ids[3]
}
