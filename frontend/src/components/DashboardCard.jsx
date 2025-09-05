const DashboardCard = ({ title, description, icon, color, onClick }) => {
  const colorMap = {
    blue: 'from-blue-500 to-cyan-400',
    orange: 'from-orange-400 to-yellow-300',
    red: 'from-red-500 to-pink-400'
  }
  return (
    <div
      className={`cursor-pointer rounded-xl p-6 shadow-lg bg-gradient-to-br ${colorMap[color]} text-white flex flex-col gap-2 hover:scale-105 transition`}
      onClick={onClick}
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default DashboardCard