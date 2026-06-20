import { AuthScreen } from '../components/layout/AuthScreen'
import { Seo } from '../components/primitives/Seo'

export default function Login() {
  return (
    <>
      <Seo title="Log in — QYNE" description="Log in to your QYNE training dashboard." path="/login" noindex />
      <AuthScreen mode="login" />
    </>
  )
}
