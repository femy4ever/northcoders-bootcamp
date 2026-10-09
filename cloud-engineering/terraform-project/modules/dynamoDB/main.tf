resource "aws_dynamodb_table" "dynamodb-table" {
  # count = length(var.Table_Names)
  name         = var.Table_Name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "var.Hash_Key"

  attribute {
    name = "var.Hash_Key"
    type = var.Hash_Key_type
  }
}