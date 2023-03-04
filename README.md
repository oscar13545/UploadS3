# UploadS3
### 1) Primero se debe de realizar bucket 
### 2) Las políticas debe de ser 
{
  "Id": "Policy1677872017249",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1677872012897",
      "Action": "s3:*",
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::my-site-prueba1/*",
      "Principal": "*"
    }
  ]
}
### 3) Las reglas CORS deben de ser
[    {        "AllowedHeaders": [            "*"        ],
        "AllowedMethods": [
            "GET",
            "PUT",
            "POST",
            "DELETE",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]

### 4) Instalar las librerías de AWS-SDK con el comando:
#### npm install aws-sdk
### Y listo!
