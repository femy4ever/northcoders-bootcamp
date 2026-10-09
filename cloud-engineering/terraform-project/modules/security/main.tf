resource "aws_security_group" "allow_HTTP" {
  name        = "allow_HTTP"
  description = "allow HTTP inbound traffic"
  vpc_id      = var.vpc_id
}
resource "aws_security_group_rule" "allow_HTTP_ingress" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.allow_HTTP.id
}
resource "aws_security_group_rule" "allow_HTTP_ingress_3000" {
  type             = "ingress"
  from_port        = 3000
  to_port          = 3000
  protocol         = "tcp"
  cidr_blocks      = ["0.0.0.0/0"]
  ipv6_cidr_blocks = ["::/0"]
  security_group_id = aws_security_group.allow_HTTP.id
}
resource "aws_security_group_rule" "allow_HTTP_egress" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = -1
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.allow_HTTP.id
}
resource "aws_security_group" "allow_HTTPS" {
  name        = "allow_HTTPS"
  description = "allow HTTPS inbound traffic"
  vpc_id      = var.vpc_id
}
resource "aws_security_group_rule" "allow_HTTPS_ingress" {
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.allow_HTTPS.id
}
resource "aws_security_group_rule" "allow_HTTPS_egress" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = -1
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.allow_HTTPS.id
}
resource "aws_security_group" "allow_SSH" {
  name        = "allow_SSH"
  description = "allow SSH inbound traffic from my IP only"
  vpc_id      = var.vpc_id
}
resource "aws_security_group_rule" "allow_SSH_ingress" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["31.205.213.69/32", "10.0.0.0/16"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.allow_SSH.id
}
resource "aws_security_group_rule" "allow_SSH_egress" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = -1
  cidr_blocks       = ["0.0.0.0/0"]
  ipv6_cidr_blocks  = ["::/0"]
  security_group_id = aws_security_group.allow_SSH.id
}

