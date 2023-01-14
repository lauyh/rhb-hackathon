import Image from 'next/image'

const AccBalCard = ({ netWorth = '10,000', savings = '0', cashIn = '0', cashOut = '0', totalFlow = '0' }) => {
    return (
        <div className="p-4">
            <div className="flex items-center bg-slate-300 rounded-lg pl-10 py-2 mb-3">
                <Image className="mr-3" src="/coin.png" width={16} height={16} alt="Coin" />
                <span className="font-bold pr-1">NET WORTH:</span>
                <span className="font-semibold text-stone-500">VRM{netWorth}</span>
            </div>
            <div className="flex items-center bg-slate-300 rounded-lg pl-10 py-2 mb-3">
                <Image className="mr-3" src="/coin.png" width={16} height={16} alt="Coin" />
                <span className="font-bold pr-1">SAVINGS:</span>
                <span className="font-semibold text-slate-600">VRM{savings}</span>
            </div>
            <div className="bg-slate-300 rounded-lg">
                <div className="flex items-center pl-10 py-2 mb-1">
                    <Image className="mr-3" src="/coin.png" width={16} height={16} alt="Coin" />
                    <span className="font-bold pr-1">CASH INFLOW:</span>
                    <span className="font-semibold text-green-600">VRM{cashIn}</span>
                </div>
                <div className="flex items-center pl-10 py-2 mb-1">
                    <Image className="mr-3" src="/coin.png" width={16} height={16} alt="Coin" />
                    <span className="font-bold pr-1">CASH OUTFLOW:</span>
                    <span className="font-semibold text-rose-500">VRM{cashOut}</span>
                </div>
                <div className="flex items-center pl-10 py-2 mb-1">
                    <span className="font-bold pr-1">TOTAL CASH FLOW:</span>
                    <span className="font-semibold text-slate-600">VRM{totalFlow}</span>
                </div>
            </div>
        </div>
    )
}

export default AccBalCard
