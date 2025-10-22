export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const isValid = Math.random() < 0.5

  const errorCodes: { code: string; shouldShowCredential: boolean }[] = [
    {
      code: 'INVALID_SIGNATURE',
      shouldShowCredential: false
    },
    {
      code: 'EXPIRED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'REVOKED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'SUSPENDED_CREDENTIAL',
      shouldShowCredential: true
    },
    {
      code: 'NOT_VALID_YET',
      shouldShowCredential: true
    },
    {
      code: 'ORGANIZATION_CANT_BE_VERIFIED',
      shouldShowCredential: true
    }
  ]

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

  const randomReason = errorCodes[Math.floor(Math.random() * errorCodes.length)]

  return Response.json({
    isValid: false,
    reason: randomReason.code,
    credential: randomReason.shouldShowCredential
      ? {
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
      : null
  })
}
