import { useGetProductField } from '@/api/getProductField'
import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { FilterTypes } from '@/types/filters'
import { RadioGroup } from '@base-ui/react'

type FiltersOriginProps = {
  setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FiltersOriginProps) => {

    const { setFilterOrigin } = props;
    const { result, loading }: FilterTypes = useGetProductField()
    console.log(result)

  return (
    <div className='my-5' >

      <p className='mb-3 font-bold' > Oirgen </p>
      {loading && result === null && (
        <p>Cargando origen...</p>
      )}

      <RadioGroup onValueChange={(value) => setFilterOrigin(value) } >
        {result !== null && result?.schema?.attributes?.origin?.enum.map((origin: string) => (
            
            <div key={origin} className='flex items-center space-x-3'>
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}> {origin} </Label>
            </div>
        ))}
      </RadioGroup>
        
    </div>
  )
}

export default FilterOrigin
