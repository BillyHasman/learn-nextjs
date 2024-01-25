import Layout from '@/layout'
import { useRouter } from 'next/router'

export default function UsersByName() {
  const router = useRouter()
  const { id } = router?.query

  return (
    <Layout>
      <div className='my-10 text-center justify-items-center'>
        <p>Hello {id} whatsup?</p>
      </div>
    </Layout>
  )
}
