# UploadS3
## Primero se debe de realizar bucket 
## Las políticas debe de ser 
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
## Y las reglas CORS
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

## Por último se debe de instalar las librerías de AWS-SDK con el comando:
#### npm install aws-sdk
## Y listo!
