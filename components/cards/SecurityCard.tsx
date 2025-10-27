interface SecurityCardProps {
    title: string
    description: string
    iconColor: string
    iconBackground: string
    separator?: boolean
}

const SecurityCard = ({ title, description, iconColor, iconBackground, separator }: SecurityCardProps) => {
    return (
        <div className="flex items-center justify-between flex-col sm:flex-row">
            <div className="px-4 pt-4">
                <div className={`mb-4 flex items-center justify-center ${iconBackground} w-8 h-8 rounded-full`}>
                    <span className={`w-2.5 h-2.5 rounded-full ${iconColor}`}></span>
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-[#4D525F]">{description}</p>
            </div>
            {
                separator && <div className="hidden sm:block w-32 sm:w-0.5 h-0.5 sm:h-32 bg-linear-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
            }
        </div>
    )
}

export default SecurityCard