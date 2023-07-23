import { Button, Card } from '@/packages/components'

export default () => {
  return (
    <div className="flex flex-col">
      <Card color="primary" variant="filled">
        <p>filled primary card</p>
        <div className="flex justify-end">
          <Button variant="tonal">Get started</Button>
        </div>
      </Card>
    </div>
  )
}
