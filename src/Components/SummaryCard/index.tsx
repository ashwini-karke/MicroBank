import './styles.css'


interface Summary{
    category?: string;
    categoryName: string;
    categoryDetails:string;
  }
  
  const categoryData: Summary[] = [
    {
      category: "Summary",
      categoryName: "Account Number",
      categoryDetails:"67238744",
    },
    {
      category: "Summary",
      categoryName: "Income",
      categoryDetails:"$20,00,000",
    },
    {
      category: "Summary",
      categoryName: "Spends",
      categoryDetails:"$11,00,000",
    },
  ];
export default function DashboardSummary() {
  return (
    <div className="summary-card">
        <div className='category'>
            {categoryData[0].category}
        </div>
        <div className="summary-component-wrapper">
            {categoryData.map(
                (
                data: Summary,
                index: number
                ): JSX.Element => (
                    <div key={index}>
                        <p className='category-name'>{data.categoryName}</p>
                        <p className='category-details'>{data.categoryDetails}</p>
                    </div>
                    
                )
            )}
        </div>
    </div>

        
  )
}
