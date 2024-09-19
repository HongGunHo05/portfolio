import Text from '@components/atoms/Text'
import {motion} from 'framer-motion'
import IconObjectLinkChain from '@public/static/icon/object/link-chain.svg'
import Image from 'next/image'

export type SectionTitleProps = {
    title: string
    color?: string
    onClickScrollClip?: () => void
}

const SectionTitle = ({
                          title,
                          color,
                          onClickScrollClip,
                      }: SectionTitleProps) => (
    <motion.div
        initial={{translateY: 0, opacity: 0}}
        whileInView={{
            translateY: -20,
            opacity: 1,
        }}
        transition={{
            delay: 0.3,
            x: {duration: 1},
            default: {ease: 'linear'},
        }}
        viewport={{
            once: true,
        }}
        css={{
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <Text
            css={{
                fontWeight: 'bold',
                fontSize: '4rem',
                borderBottomColor: '#cccccc',
                borderBottomWidth: 2,
                borderBottomStyle: 'solid',
                color,
            }}
        >
            {title}
        </Text>
    </motion.div>
)

export default SectionTitle
