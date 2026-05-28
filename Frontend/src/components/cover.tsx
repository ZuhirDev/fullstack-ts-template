import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@components/ui/card"
import { ModeToggle } from "@components/mode-toggle"
import { Badge } from "@components/ui/badge"
import { Rocket, ShieldCheck, Zap, Code2, ServerCrash, Loader2 } from "lucide-react"
import CONFIG from "@/config/config"


type Feature = {
  icon: React.ReactNode
  title: string
  description: string
}

type CoverProps = {
  title?: string
  subtitle?: string
  version?: string
}

function useBackendStatus(url: string) {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking')

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await fetch(url, { method: 'GET' })
        setStatus('connected')
      } catch (error) {
        setStatus('error')
      }
    }

    checkConnection()
    const interval = setInterval(checkConnection, 5000)
    
    return () => clearInterval(interval)
  }, [url])

  return status
}

export function Cover({
  title = "TypeScript Boilerplate",
  subtitle = "Plantilla base optimizada y lista para arrancar tus proyectos de React sin perder tiempo en configuraciones.",
  version = "v1.0.0",
}: CoverProps) {
  const backendUrl = CONFIG.BACKEND_URL
  const backendStatus = useBackendStatus(backendUrl)

  const templateFeatures: Feature[] = [
    { 
      icon: <Code2 className="h-5 w-5 text-indigo-500" />, 
      title: "React & TypeScript", 
      description: "Tipado estricto y estructuración limpia de componentes." 
    },
    { 
      icon: <Zap className="h-5 w-5 text-amber-500" />, 
      title: "Tailwind CSS", 
      description: "Estilos rápidos, modernos y completamente responsivos." 
    },
    { 
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />, 
      title: "shadcn/ui", 
      description: "Componentes UI accesibles y altamente personalizables." 
    },
    { 
      icon: <Rocket className="h-5 w-5 text-rose-500" />, 
      title: "Docker Ready", 
      description: "Ecosistema contenedorizado con Nginx, Node y React." 
    },
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <Card className="max-w-3xl w-full border-border/60 bg-card/60 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-border">
        <CardHeader className="text-center pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <Badge variant="secondary" className="px-3 py-1 font-mono text-xs tracking-wider">
              {version}
            </Badge>
            
            <div className="hidden sm:block text-muted-foreground/30">•</div>
            
            <div className="flex items-center gap-2 text-sm bg-background/50 px-3 py-1 rounded-full border border-border/50">
              {backendStatus === 'checking' && (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                  <span className="text-muted-foreground text-xs font-medium">Buscando servidor...</span>
                </>
              )}
              {backendStatus === 'connected' && (
                <>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Backend en línea</span>
                </>
              )}
              {backendStatus === 'error' && (
                <>
                  <ServerCrash className="h-3.5 w-3.5 text-rose-500" />
                  <span className="text-rose-600 dark:text-rose-400 text-xs font-medium">Backend desconectado</span>
                </>
              )}
            </div>
          </div>

          <CardTitle className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
            {title}
          </CardTitle>
          <CardDescription className="text-base sm:text-lg max-w-xl mx-auto mt-2">
            {subtitle}
          </CardDescription>
        </CardHeader>

        <CardContent className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {templateFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-background/50 hover:bg-accent/50 transition-colors"
              >
                <div className="p-2 bg-background rounded-lg border border-border/60 shadow-sm">
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm tracking-tight">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Cover