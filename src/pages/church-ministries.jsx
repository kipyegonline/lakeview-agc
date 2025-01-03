import { Backdrop, CircularProgress } from   "@mui/material"
import React from "react"
import { LccDepartments } from "../components/departments/Departments"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Ministries = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Layout>
      <SEO title="Lakeview AGC ministries, LCC" />

      <LccDepartments />
    </Layout>
  )
}

export default Ministries
