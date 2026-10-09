output "ami_ids" {
  value = [aws_ami_from_instance.lighting_server_ami.id, aws_ami_from_instance.heating_server_ami.id, aws_ami_from_instance.status_server_ami.id, aws_ami_from_instance.auth_server_ami.id]
}


