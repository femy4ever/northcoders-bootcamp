module "vpc" {
  source            = "./modules/vpc"
  vpc_cidr_block    = var.vpc_cidr_block
  public_subnets    = var.public_subnets
  availability_zone = var.availability_zone
  private_subnets   = var.private_subnets
}
module "security" {
  source = "./modules/security"
  vpc_id = module.vpc.vpc_id
}

module "Lighting" {
  source        = "./modules/dynamoDB"
  Table_Name    = "Lighting"
  Hash_Key      = var.Hash_Key
  Hash_Key_type = var.Hash_Key_type
}
module "Heating" {
  source        = "./modules/dynamoDB"
  Table_Name    = "Heating"
  Hash_Key      = var.Hash_Key
  Hash_Key_type = var.Hash_Key_type
}
module "servers" {
  source             = "./modules/servers"
  instance_type      = var.instance_type
  public_subnets     = module.vpc.public_subnets_ids
  private_subnets    = module.vpc.private_subnets_ids
  security_group_ids = module.security.security_group_ids
}
module "load_balancer" {
  source             = "./modules/load_balancer"
  vpc_id             = module.vpc.vpc_id
  security_group_ids = module.security.security_group_ids
  public_subnets     = module.vpc.public_subnets_ids
  private_subnets    = module.vpc.private_subnets_ids
  server_ids         = module.servers.server_ids
  target_group_name  = var.target_group_name
  port_number = var.port_number
}

module "autoscaling" {
  source            = "./modules/autoscaling"
  availability_zone = var.availability_zone
  public_subnets    = module.vpc.public_subnets_ids
  private_subnets   = module.vpc.private_subnets_ids
  instance_type     = var.instance_type
  desired_capacity  = var.desired_capacity
  min_size          = var.min_size
  max_size          = var.max_size
  ami_ids = module.ami.ami_ids
  public_target_group_arns = module.load_balancer.public_target_group_arns
  private_target_group_arns = module.load_balancer.private_target_group_arns
}

module "ami" {
  source = "./ami"
  server_ids         = module.servers.server_ids
  
}