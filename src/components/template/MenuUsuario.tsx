
import { Avatar, Menu } from "@mantine/core";
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useContext } from "react";

export default function MenuUsuario() {

  
    return (
        <Menu>
            <Menu.Target>
              
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>Usuário</Menu.Label>
                <Link href="/">
                    <Menu.Item
                        icon={<IconArrowsRightLeft size={14} />}
                    >Finanças</Menu.Item>
                </Link>
                <Link href="/usuario">
                    <Menu.Item
                        icon={<IconUser size={14} />}
                    >Meus Dados</Menu.Item>
                </Link>
                <Menu.Divider />
              
            </Menu.Dropdown>
        </Menu>
    )
}