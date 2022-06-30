import trashIcon from './trashIcon.png'
import cancelIcon from './cancelIcon.png'

const icons = {
    trashIcon,
    cancelIcon,
}

export const Ico = ({name}) => (
    <img src={icons[name]} width={15} alt="icon" />
)