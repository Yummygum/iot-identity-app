import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/molecules/Table/Table'

const DUMMY_DATA: {
  course: string
  status: string
  grade: string
}[] = [
  {
    course: 'Module 1 Challenge: The basics of civil engineering',
    status: 'Passed',
    grade: '8.5'
  },
  {
    course: 'Module 1 Challenge: The basics of civil engineering',
    status: 'Passed',
    grade: '8.5'
  },
  {
    course: 'Module 1 Challenge: The basics of civil engineering',
    status: 'Passed',
    grade: '8.5'
  },
  {
    course: 'Module 1 Challenge: The basics of civil engineering',
    status: 'Passed',
    grade: '8.5'
  },
  {
    course: 'Module 1 Challenge: The basics of civil engineering',
    status: 'Passed',
    grade: '8.5'
  },
  {
    course: 'Module 1 Challenge: The basics of civil engineering',
    status: 'Passed',
    grade: '8.5'
  }
]

const DegreeTable = () => {
  return (
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="w-60">Course</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Grade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-foreground/60">
        {DUMMY_DATA.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="whitespace-normal">{item.course}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default DegreeTable
