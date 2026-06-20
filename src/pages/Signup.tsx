import { AuthScreen } from '../components/layout/AuthScreen'
import { Seo } from '../components/primitives/Seo'

export default function Signup() {
  return (
    <>
      <Seo title="Sign up — QYNE" description="Create your QYNE account and start training with data, not guesswork." path="/signup" noindex />
      <AuthScreen mode="signup" />
    </>
  )
}
