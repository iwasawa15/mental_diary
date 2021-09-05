import React, { FC } from "react"
import Link from "next/link"
import {
	List,
	ListItem,
	ListItemText
} from "@material-ui/core"
import { List as ListIcon, Home, ShoppingCart } from "@material-ui/icons"

export const SideBar: FC = () => {
	return (
		<List>
			<Link href="/" >
				<ListItem button>
					<ListIcon>
						<Home />
					</ListIcon>
					<ListItemText primary="トップページ" />
				</ListItem>
			</Link>
			<Link href="/products" >
				<ListItem button>
					<ListIcon>
						<ShoppingCart />
					</ListIcon>
					<ListItemText primary="商品ページ" />
				</ListItem>
			</Link>
		</List>
	)
}