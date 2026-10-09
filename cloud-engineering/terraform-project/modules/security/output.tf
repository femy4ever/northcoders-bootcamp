output "security_group_ids" {
    value = [aws_security_group.allow_HTTP.id, aws_security_group.allow_HTTPS.id, aws_security_group.allow_SSH.id]
}