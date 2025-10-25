// components/UserStatsCard.tsx

type UserStatsCardProps = {
    count: string;
    label: string;
};

const UserStatsCard: React.FC<UserStatsCardProps> = ({ count, label }) => {
    return (
        <div className="bg-background p-4 rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-80 border w-36 text-center">
            <p className="text-3xl font-extrabold text-indigo-600 mb-0.5">{count}</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</p>
        </div>
    );
};

export default UserStatsCard;