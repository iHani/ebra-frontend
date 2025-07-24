const steps = [
  { id: 1, name: "Shopping cart", status: "current" },
  { id: 2, name: "Checkout details", status: "upcoming" },
  { id: 3, name: "Order complete", status: "upcoming" },
]

export default function CartStepper() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center justify-center space-x-8">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="relative flex-1">
            {step.status === "current" ? (
              <div className="flex flex-col items-center gap-2 text-center" aria-current="step">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-3legant-gray-500">
                    <span className="font-bold text-white text-sm">{step.id}</span>
                  </span>
                  <span className="text-md font-semibold text-3legant-gray-500 hidden sm:block">{step.name}</span>
                </div>
                <div className="absolute top-full mt-2 h-0.5 w-full bg-3legant-gray-500" />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-3legant-gray-200">
                    <span className="font-bold text-3legant-gray-400 text-sm">{step.id}</span>
                  </span>
                  <span className="text-md font-medium text-3legant-gray-300 hidden sm:block">{step.name}</span>
                </div>
                <div className="absolute top-full mt-2 h-0.5 w-full bg-3legant-gray-200" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
