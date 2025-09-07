
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '../Components/ui/Button.jsx'

import { Search } from "lucide-react";

const samplePolices=[
    {
        title: "Widow Pension Scheme - Rajasthan",
        tags: ["Pension", "Rajasthan", "Women"],
        summary: "Financial assistance to widows above 18 years in Rajasthan.",
        link: "#"
      },
      {
        title: "PM Kisan Samman Nidhi Yojana",
        tags: ["Farmer", "Income Support", "PM-KISAN"],
        summary: "Rs 6000 annual support to small and marginal farmers in 3 installments.",
        link: "#"
      },
      {
        title: "Ayushman Bharat Yojana",
        tags: ["Health", "Insurance", "BPL"],
        summary: "Free medical treatment up to Rs 5 lakhs per family per year.",
        link: "#"
        },
]

const KnowledgeBasePage = () => {

    const [query,setQuery]=useState("")
   
    const filteredPolicies=samplePolices.filter((policy)=>{
        policy.title.toLowerCase().includes(query.toLowerCase() ||
        policy.summary.toLowerCase().includes(query.toLowerCase()) ||
        policy.tags.some((tag)=>tag.toLowerCase().includes(query.toLowerCase()))
    )
    })

    return(
        <div>
            
        </div>
    )
}

export default KnowledgeBasePage;