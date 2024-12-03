import {forwardRef, useId} from 'react'
function Select({
  options,
  label,
  className = "",
  ...props
  },ref ) {
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
    <select {...props} ref={ref} className= {`px—3 py—2 rounded—Ig bg—white text-black outline—none focus : bg-gray-50
duration-20 border border-gray-20 w—full ${className}`} id={id}>
        {options?.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
        </select>
    </div>
  )
}

// export default React.forwardRef(Select); 
export default forwardRef(Select);
