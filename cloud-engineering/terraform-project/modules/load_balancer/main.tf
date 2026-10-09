resource "aws_lb_target_group" "alb_tg_public" {
  name     = "public-target-group"
  port     = 3000
  protocol = "HTTP"
  protocol_version = "HTTP1"
  vpc_id      = var.vpc_id
  health_check {
    path                = "/health-check"
    protocol            = "HTTP"
  }
}
resource "aws_lb_target_group_attachment" "Lighting" { 
   target_group_arn = aws_lb_target_group.alb_tg_public.arn
   target_id        = var.server_ids[0]
   port             = var.port_number
 }
 resource "aws_lb_target_group_attachment" "Heating" { 
   target_group_arn = aws_lb_target_group.alb_tg_public.arn
   target_id        = var.server_ids[1]
   port             = var.port_number
 }
 resource "aws_lb_target_group_attachment" "Status" { 
   target_group_arn = aws_lb_target_group.alb_tg_public.arn
   target_id        = var.server_ids[2]
   port             = var.port_number
 }

resource "aws_lb" "public" {
  name               = "public-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = var.security_group_ids
  subnets            = var.public_subnets
  enable_deletion_protection = false
}

resource "aws_lb_listener" "public" {
  load_balancer_arn = aws_lb.public.arn
  port = 80
  protocol = "HTTP"

  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.alb_tg_public.arn
  }
}

resource "aws_lb_target_group" "alb_tg_private" {
  name     = "private-target-group"
  port     = 3000
  protocol = "HTTP"
  protocol_version = "HTTP1"
  vpc_id      = var.vpc_id

  health_check {
    path                = "/health-check"
    protocol            = "HTTP"
  }
} 

resource "aws_lb_target_group_attachment" "Auth" {
   target_group_arn = aws_lb_target_group.alb_tg_private.arn
   target_id        = var.server_ids[3]
   port             = var.port_number
 }
 resource "aws_lb" "private" {
  name               = "private-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = var.security_group_ids
  subnets            = var.private_subnets
  enable_deletion_protection = false
}

resource "aws_lb_listener" "private" {
  load_balancer_arn = aws_lb.private.arn
  port = 80
  protocol = "HTTP"

  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.alb_tg_private.arn
  }
}
