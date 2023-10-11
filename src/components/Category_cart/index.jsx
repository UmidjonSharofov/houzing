
import category2 from '../../assets/images/category2.png'


// eslint-disable-next-line react/prop-types
const CategoryCart = ({onClick, data={} }) => {
    const {name}=data
    return (
        <div onClick={onClick} className='CategoryCart'>
            <div className='category_img'>
                <img src={category2} alt="img" />
                <div className='blur' />
                <div className='category_title'>
                    <p>{name || 'Category Name'}</p>
                </div>
            </div>

        </div>

    )
}
export default CategoryCart