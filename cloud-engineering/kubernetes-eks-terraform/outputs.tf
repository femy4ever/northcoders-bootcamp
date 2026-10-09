output "region" {
  description = "AWS region"
  value       = var.region
}

output "cluster_name" {
  description = "Kubernetes Cluster Name"
  value       = module.eks_cluster.cluster_name
}

output "cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = module.eks_cluster.cluster_endpoint
}

output "cluster_security_group_id" {
  description = "Security group ids attached to the cluster control plane"
  value       = module.eks_cluster.cluster_security_group_id
}

/* cluster_endpoint = "https://B91DC823605003BF13CDFBBA5607B378.gr7.eu-west-2.eks.amazonaws.com"
cluster_name = "ce-cluster"
cluster_security_group_id = "sg-0f75a3f88189de73d"
region = "eu-west-2"*/