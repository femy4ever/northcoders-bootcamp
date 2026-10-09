resource "aws_launch_template" "lighting_shm_server" {
  name_prefix   = "asg_launch"
  image_id      = var.ami_ids[0]
  instance_type = var.instance_type
}

resource "aws_autoscaling_group" "Lighting" {
  name                      = "Lighting_asg"
  desired_capacity   = var.desired_capacity
  max_size           = var.max_size
  min_size           = var.min_size
  vpc_zone_identifier       = var.public_subnets
  target_group_arns    = var.public_target_group_arns
  launch_template {
    id = aws_launch_template.lighting_shm_server.id
    version = "$Latest"
  }
}
resource "aws_launch_template" "heating_shm_server" {
  name_prefix   = "asg_launch"
  image_id      = var.ami_ids[1]
  instance_type = var.instance_type
}
resource "aws_autoscaling_group" "Heating" {
  name                      = "Heating_asg"
  desired_capacity   = var.desired_capacity
  max_size           = var.max_size
  min_size           = var.min_size
  vpc_zone_identifier       = var.public_subnets
  target_group_arns    =var.public_target_group_arns

  launch_template {
    id = aws_launch_template.heating_shm_server.id
    version = "$Latest"
  }
}
resource "aws_launch_template" "status_shm_server" {
  name_prefix   = "asg_launch"
  image_id      = var.ami_ids[2]
  instance_type = var.instance_type
}
resource "aws_autoscaling_group" "Status" {
  name                      = "status_asg"
  desired_capacity   = var.desired_capacity
  max_size           = var.max_size
  min_size           = var.min_size
  vpc_zone_identifier       = var.public_subnets
  target_group_arns    = var.public_target_group_arns

  launch_template {
    id = aws_launch_template.status_shm_server.id
    version = "$Latest"
  }
}
resource "aws_launch_template" "auth_shm_server" {
  name_prefix   = "asg_launch"
  image_id      = var.ami_ids[3]
  instance_type = var.instance_type
}
resource "aws_autoscaling_group" "Auth" {
  name                      = "Auth_asg"
  desired_capacity   = var.desired_capacity
  max_size           = var.max_size
  min_size           = var.min_size
  vpc_zone_identifier       = var.private_subnets
  target_group_arns    = var.private_target_group_arns

  launch_template {
    id = aws_launch_template.auth_shm_server.id
    version = "$Latest"
  }
}

