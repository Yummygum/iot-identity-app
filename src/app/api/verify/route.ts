export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const isValid = Math.random() < 0.5

  if (isValid) {
    return Response.json({
      isValid: true,
      verifier: {
        verifiedAt: new Date(),
        name: 'Verifier XYZ',
        url: 'https://example.com/verifier-xyz'
      },
      credential: {
        name: 'John Doe',
        issuer: {
          name: 'Amsterdam University of Applied Sciences',
          logoUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8RwvnbGaiWMpSJM7V5hPeftqJ4jj8_oiTw&s'
        },
        issuanceDate: new Date(),
        expiryDate: new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        )
      }
    })
  }

  return Response.json({
    isValid: false,
    reason: 'Invalid signature',
    credential: {
      name: 'John Doe',
      issuer: {
        name: 'Amsterdam University of Applied Sciences',
        logoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8RwvnbGaiWMpSJM7V5hPeftqJ4jj8_oiTw&s'
      },
      issuanceDate: new Date(),
      expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
  })
}
