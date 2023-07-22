import { Coffee, coffeeInfoListItems } from "./FlavorMeter";
import HorizontalLine from "./HorizontalLine";

export default function ({ coffee }: { coffee: Coffee }) {
  return (
    <>
      {/* <HorizontalLine /> */}

      <h4 style={{ fontSize: '1.6em' }}>
        {coffee.name}
      </h4>

      {/* <div style={{ color: "red", fontSize: 20, fontVariant: 'tabular-nums' }} >
        {`$${coffee.price} | 12 oz. bag`}
      </div>

      <p>
        {coffeeInfoListItems.map((value) => (
          <div style={{ fontSize: 16 }}>
            <>
              <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                {`${value} – `}
              </span>
              {coffee[value]}
            </>
          </div>
        ))}
      </p> */}

      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
          {`Roast – `}
        </span>
        {coffee.roast}
      </p>

      {/* <p>
        {coffee.description}
      </p> */}

    </>
  )
}