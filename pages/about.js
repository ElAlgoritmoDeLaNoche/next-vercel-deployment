import Link from 'next/link'
import { Darklayout } from '../components/layouts/Darklayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>About page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <Darklayout>
        {page}
      </Darklayout>
    </MainLayout>
  )
}