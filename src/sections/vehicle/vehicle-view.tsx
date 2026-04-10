import VehicleList from './components/vehicle-list'

const VehicleView = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8">
        {/* Gọi component danh sách nhà xe vào đây */}
        <VehicleList />
      </div>
    </div>
  )
}

export default VehicleView