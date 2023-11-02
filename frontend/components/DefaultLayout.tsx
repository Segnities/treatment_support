import Header from "@/components/Header";

interface Props {
    children: React.ReactNode
}

export default function DefaultLayout({children}: Props) {
    return (
      <>
          <Header/>
          {
              children
          }
      </>
    );
}

