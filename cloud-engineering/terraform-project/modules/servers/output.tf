output "server_ids" {
  value = [aws_instance.Lighting.id, aws_instance.Heating.id, aws_instance.Status.id, aws_instance.Auth.id]
}