export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 0))

  const randomColors = ['#00C785', '#0079C7', '#C76A00']

  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)]

  return Response.json({
    credential: {
      issuedTo: 'John Doe',
      dateOfBirth: new Date('2001-08-13'),
      type: "Bachelor's Degree",
      name: 'HBO Bouwkunde - Civil Engineering',
      issuer: {
        name: 'EVC Nederland',
        url: 'https://evc-nederland.nl/',
        colors: {
          primary: randomColor
        }
      },
      issuanceDate: new Date(),
      expiryDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ),
      description: `A bachelor in Bouwkunde (Architecture / Building Engineering) combines creativity and technical expertise to design and realize the built environment. Students learn to translate spatial and structural concepts into functional, sustainable, and aesthetically pleasing designs. 
        
The program covers architecture, construction technology, materials, and urban planning, preparing graduates to collaborate with engineers, designers, and contractors on projects that shape the cities of tomorrow.`,
      verifier: {
        verifiedAt: new Date(),
        name: 'Examenkamer',
        url: 'https://example.com/verifier-xyz',
        logoUrl: 'https://www.examenkamer.nl/inhoud/uploads/Logo-full-color.svg'
      }
    }
  })
}
