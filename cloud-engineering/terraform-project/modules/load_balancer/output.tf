output "public_target_group_arns" {
  value = [aws_lb_target_group.alb_tg_public.arn]
}
output "private_target_group_arns" {
  value = [aws_lb_target_group.alb_tg_private.arn]
}