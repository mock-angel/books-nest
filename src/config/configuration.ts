export default () => ({
  // port: parseInt(process.env.PORT, 10) || 3080,
  // database: {
  //   host: process.env.DATABASE_HOST,
  //   port: parseInt(process.env.DATABASE_PORT, 10) || 3306
  // }
  siteUrl: process.env.SITE_URL || 'http://[::1]:3060',
  serverKey: process.env.SERVER_KEY || '',
  clientTestRegistrationToken: process.env.CLIENT_TEST_REGISTRATION_TOKEN || '',
  port: parseInt(process.env.PORT) || 3060,
  PROJECT_ID: 'gc-invoice-manager',
  PRIVATE_KEY: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdKOeOGdglPwZl\nHc9zkhQaXjouE24A8VvN5/3pz4FMU27aHTUJ/D+HwoplceZzFuk0bbm7y2sCEQfV\n5vxJjbEKkQ72sNTfI7ScwogeN6WQu6B3d4IvYrmQA1YiY2xYVd/tQIIIBxfzPsjq\nYxEXK6BCmuFDsUPBsJqNvLk+EPioxemQ788DeLxzpNMXSozTPGTwpXDf5iMzkE1U\n7E63xVgXunywu0e8UgiFTKPaPYnBaU+89goPPxD6nAqSgwejC6F+M0j/Uuhq1U0F\nK/nHayMa6/0V1lLWRl23M4w2gdPyj8ZQ/ZcdtF57YyLS84AEiWco9FJzmvbpK5Eu\nvSOsBgjRAgMBAAECggEACuEEH2pzU4e4ePsuazsBVH5xk1MxvhO3FcqxgVQFiKut\nXKChNWjeWnbZZvKSn+Sl/cS7MtBe3tCgPNq9m9dYuikmsqW0xKIHfIL8UnAqcDmG\nvwJZMw/H1dvfRGfivf4qzzT0E1tvWV2fIZd8PUD+OeIYBhwxGykvF7Do106sMd2O\nmh+LuJCZ52KEh8ZU+mDZqM8bflPHUdxXt0rH/VhkQyQevO7eN87wstngjQwuoTmh\nE3SSEsgxqyWb+rNSDm353rvSgbfQ5+VDibs5f3TDggHAO7CbQzxZWD6Dx9HRvhlD\nuztKx0wy3b0McnPilN0r0h81MIUEAbq4T17ahxXzCQKBgQDMpePNbUHCVKM16O6e\nyYXCg/9spLqFc/kJXi0T5smcsRUb5hNPLvelkkXRdcAUbBaxKm6kKME3ALpYpxL2\n6e5TxC8R05LCVBO9dxh7qWKazHlQxSkGtU0nKq2I23Mmko7n7Wdqdb9dlJyoOMIA\nU/19ywSi1krKF3V/VaYvDRj+uQKBgQDEmHtmZir8zWRw7kqBzRboh3rWfdc5dxHV\nVUJ7tdcf0po9dOX25EKGAP7pwjar5h7grMZF644gjOES/xRaSw+PabhqvsuE+Gwz\nWzfeqH8xHU3nGNPl3beaILj+8T8FEj40A5zVIr/Jx8PWYMHqEtjFvHuD3mSmhic8\nsbMaHygO2QKBgAfudgHENkQ924V/XaAx10lOrFudls0NTZ2bVMvsqeu0wUivhhgP\njfGQ1bvkgGlKNybuqhMasUJceNxuvUFsl5wPgnOCa7G0aH9zWjOQwQ2W1yzWN1zX\nMgJOmSMwvinEjF1YyiVKIvyRgfDTIlG4754sfCWDgKqMdjVVMHeqXkmhAoGAWOXm\nrxg2ChjKeXKXiHh4Cm/w8Pr4jsiz7LbgGFbSz1YJXw70Sh9PoY7jtkqXNEYb4lbe\nVZG9tCRgRpnH10in4Z7ZwJNELn2zV8nAytOAqHHq3zxP3VrUAkMXxFjMuXtVW2ni\nylIrTZAik1cveKxLD6c6ZxfyhYaWSZDFP2OlVokCgYBCDF6COTsDRwlx0R4gLnPb\nGxGX+rHnV6szCiaf+Qz9xIVBkDX4LzYDqSw0C4bO7kISIzGPT/JrLYEbzQcNpIt1\nfQLxZ/fsUKerFLnDqBvmslCZeRWEJRBwrOP5yLR2+KLynLVqlJcKClT5kqVacm4L\ng4tjv/NK3n5YddYfWECzEA==\n-----END PRIVATE KEY-----\n',
  CLIENT_EMAIL: 'invoice-manager-files@gc-invoice-manager.iam.gserviceaccount.com',
  STORAGE_MEDIA_BUCKET: '<YOUR_BUCKET_NAME>'
  // host: 'localhost',
});
