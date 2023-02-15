import { motion } from 'framer-motion'
import { ProfileInfo } from '../components/ProfileInfo/ProfileInfo'
import { Skils } from '../components/Skils/Skils'

const Home = () => {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
			<ProfileInfo />
			<Skils />
		</motion.div>
	)
}

export default Home
