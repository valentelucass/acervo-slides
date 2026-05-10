Claro. Para montar os slides, eu usaria estes arquivos como “base principal” do projeto, ignorando CSS.

**Arquivos Centrais**

| Arquivo | Para falar no slide |
| --- | --- |
| [package.json](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/package.json) | Dependências, scripts do Angular e JSON Server |
| [db.json](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/db.json) | Banco fake usado pelo JSON Server |
| [app.config.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/app.config.ts) | Configuração principal da aplicação |
| [app.routes.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/app.routes.ts) | Rotas do sistema e proteção de páginas |
| [models.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/models/models.ts) | Modelos das entidades do CRUD |

```json
{
  "name": "angularcrud",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "backend": "dotenv json-server -- --watch db.json --port 3000",
    "dev": "start cmd /k \"npm run backend\" && timeout /t 3 /nobreak > nul && ng serve --open"
  },
  "private": true,
  "packageManager": "npm@11.6.2",
  "dependencies": {
    "@angular/animations": "^21.2.12",
    "@angular/cdk": "^21.2.10",
    "@angular/common": "^21.2.0",
    "@angular/compiler": "^21.2.0",
    "@angular/core": "^21.2.0",
    "@angular/forms": "^21.2.0",
    "@angular/material": "^21.2.10",
    "@angular/platform-browser": "^21.2.0",
    "@angular/router": "^21.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@angular/build": "^21.2.6",
    "@angular/cli": "^21.2.6",
    "@angular/compiler-cli": "^21.2.0",
    "dotenv-cli": "^11.0.0",
    "jsdom": "^28.0.0",
    "json-server": "^0.17.4",
    "prettier": "^3.8.1",
    "typescript": "~5.9.2",
    "vitest": "^4.0.8"
  }
}

```

```json
{
  "usuarios": [
    {
      "id": "1",
      "nome": "Administrador",
      "email": "admin@ecotrack.com",
      "senha": "admin123",
      "perfil": "admin"
    },
    {
      "id": "2",
      "nome": "Operador Padrão",
      "email": "operador@ecotrack.com",
      "senha": "operador123",
      "perfil": "operador"
    }
  ],
  "geradores": [
    {
      "id": "1",
      "razaoSocial": "Indústria Química Alfa Ltda",
      "cnpj": "11222333000181",
      "inscricaoEstadual": "123.456.789.112",
      "endereco": "Rua Industrial, 1500 - Distrito Industrial, São Paulo - SP",
      "telefone": "(11) 3456-7890",
      "email": "contato@alfaquimica.com.br",
      "responsavel": "Carlos Eduardo Mendes"
    },
    {
      "id": "2",
      "razaoSocial": "Eletronics Brasil S/A",
      "cnpj": "45678901000175",
      "inscricaoEstadual": "456.789.012.345",
      "endereco": "Av. das Nações, 2200 - Jd. Tecnológico, Campinas - SP",
      "telefone": "(19) 3987-6543",
      "email": "ambiental@electronicsbr.com",
      "responsavel": "Maria Fernanda Costa"
    },
    {
      "id": "3",
      "razaoSocial": "Petroquímica Sul Ltda",
      "cnpj": "33445566000186",
      "inscricaoEstadual": "789.012.345.678",
      "endereco": "Rod. BR-116, Km 45 - Zona Industrial, Curitiba - PR",
      "telefone": "(41) 3321-4567",
      "email": "residuos@petroquimicasul.com",
      "responsavel": "José Antônio Ribeiro"
    },
    {
      "razaoSocial": "asdasdasd",
      "cnpj": "11222333000181",
      "inscricaoEstadual": "123123123",
      "endereco": "Rua Vera, 23",
      "telefone": "84994187843",
      "email": "lucasmac.dev@gmail.com",
      "responsavel": "asdasdasd",
      "id": "597VvOY"
    }
  ],
  "transportadoras": [
    {
      "id": "1",
      "razaoSocial": "TransAmbi Resíduos Especiais Ltda",
      "cnpj": "98765432000198",
      "inscricaoEstadual": "901.234.567.890",
      "licencaAmbientalNumero": "CETESB-2024-00123",
      "licencaAmbientalValidade": "2025-12-31",
      "telefone": "(11) 4567-8901",
      "email": "operacoes@transambi.com.br"
    },
    {
      "id": "2",
      "razaoSocial": "EcoLog Transportes Ambientais S/A",
      "cnpj": "12345678000195",
      "inscricaoEstadual": "234.567.890.123",
      "licencaAmbientalNumero": "IAP-2024-00456",
      "licencaAmbientalValidade": "2026-06-30",
      "telefone": "(41) 3876-5432",
      "email": "logistica@ecolog.com.br"
    }
  ],
  "residuos": [
    {
      "id": "1",
      "nome": "Solvente Orgânico Usado",
      "tipo": "quimico",
      "classe": "I",
      "unidadeMedida": "litros",
      "codigoIBAMA": "RE-001"
    },
    {
      "id": "2",
      "nome": "Óleo Lubrificante Usado",
      "tipo": "quimico",
      "classe": "I",
      "unidadeMedida": "litros",
      "codigoIBAMA": "RE-002"
    },
    {
      "id": "3",
      "nome": "Lâmpadas Fluorescentes",
      "tipo": "eletronico",
      "classe": "I",
      "unidadeMedida": "unidades",
      "codigoIBAMA": "RE-003"
    },
    {
      "id": "4",
      "nome": "Resíduos de Tinta Inflamável",
      "tipo": "inflamavel",
      "classe": "I",
      "unidadeMedida": "kg",
      "codigoIBAMA": "RE-004"
    },
    {
      "id": "5",
      "nome": "Sucata Eletrônica (REEE)",
      "tipo": "eletronico",
      "classe": "II-A",
      "unidadeMedida": "kg",
      "codigoIBAMA": "RE-005"
    },
    {
      "id": "6",
      "nome": "Embalagens Contaminadas",
      "tipo": "quimico",
      "classe": "II-A",
      "unidadeMedida": "kg",
      "codigoIBAMA": "RE-006"
    }
  ],
  "manifestos": [
    {
      "id": "1",
      "numero": "MTR-2025-0001",
      "geradorId": "1",
      "transportadoraId": "1",
      "residuoId": "1",
      "quantidade": 500,
      "dataGeracao": "2025-03-01",
      "prazoDescarte": "2025-05-30",
      "status": "finalizado",
      "observacoes": "Solvente proveniente do processo de limpeza industrial.",
      "createdAt": "2025-03-01T10:00:00.000Z"
    },
    {
      "id": "2",
      "numero": "MTR-2025-0002",
      "geradorId": "2",
      "transportadoraId": "2",
      "residuoId": "3",
      "quantidade": 1200,
      "dataGeracao": "2025-04-15",
      "prazoDescarte": "2025-07-14",
      "status": "transportado",
      "observacoes": "Lâmpadas coletadas na troca do sistema de iluminação.",
      "createdAt": "2025-04-15T14:30:00.000Z"
    },
    {
      "id": "3",
      "numero": "MTR-2025-0003",
      "geradorId": "3",
      "transportadoraId": "1",
      "residuoId": "4",
      "quantidade": 350,
      "dataGeracao": "2025-05-01",
      "prazoDescarte": "2025-07-30",
      "status": "pendente",
      "observacoes": "Resíduos de tinta do processo de pintura de dutos.",
      "createdAt": "2025-05-01T09:00:00.000Z"
    },
    {
      "id": "4",
      "numero": "MTR-2025-0004",
      "geradorId": "1",
      "transportadoraId": "2",
      "residuoId": "5",
      "quantidade": 800,
      "dataGeracao": "2025-05-05",
      "prazoDescarte": "2025-11-01",
      "status": "pendente",
      "observacoes": "Equipamentos eletrônicos obsoletos.",
      "createdAt": "2025-05-05T11:00:00.000Z"
    },
    {
      "numero": "MTR-2026-0005",
      "geradorId": "2",
      "transportadoraId": "2",
      "residuoId": "2",
      "quantidade": 10,
      "dataGeracao": "2026-01-31",
      "prazoDescarte": "2026-05-01",
      "status": "pendente",
      "observacoes": "asdads",
      "createdAt": "2026-05-10T16:52:06.763Z",
      "id": "bJuDgEp"
    }
  ]
}
```

```tsx
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};

```

```tsx
import { Routes } from '@angular/router';
import { authGuard, adminGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.LoginComponent),
  },

  {
    path: '',
    loadComponent: () => import('./layout/shell/shell').then((m) => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'manifestos/novo',
        loadComponent: () =>
          import('./pages/manifestos/manifestos').then((m) => m.ManifestosComponent),
      },
      {
        path: 'manifestos',
        loadComponent: () =>
          import('./pages/manifestos/manifestos').then((m) => m.ManifestosComponent),
      },
      {
        path: 'geradores',
        loadComponent: () =>
          import('./pages/geradores/geradores').then((m) => m.GeradoresComponent),
      },
      {
        path: 'transportadoras',
        loadComponent: () =>
          import('./pages/transportadoras/transportadoras').then((m) => m.TransportadorasComponent),
      },
      {
        path: 'residuos',
        loadComponent: () => import('./pages/residuos/residuos').then((m) => m.ResiduosComponent),
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./pages/usuarios/usuarios').then((m) => m.UsuariosComponent),
        canActivate: [adminGuard],
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];

```

```tsx
export interface Usuario {
  id?: string;
  nome: string;
  email: string;
  senha: string;
  perfil: 'admin' | 'operador';
}

export interface Gerador {
  id?: string;
  razaoSocial: string;
  cnpj: string;
  inscricaoEstadual: string;
  endereco: string;
  telefone: string;
  email: string;
  responsavel: string;
}

export interface Transportadora {
  id?: string;
  razaoSocial: string;
  cnpj: string;
  inscricaoEstadual: string;
  licencaAmbientalNumero: string;
  licencaAmbientalValidade: string;
  telefone: string;
  email: string;
}

export type TipoResiduo = 'quimico' | 'inflamavel' | 'eletronico';
export type ClasseResiduo = 'I' | 'II-A' | 'II-B';
export type StatusManifesto = 'pendente' | 'transportado' | 'finalizado';

export interface Residuo {
  id?: string;
  nome: string;
  tipo: TipoResiduo;
  classe: ClasseResiduo;
  unidadeMedida: string;
  codigoIBAMA: string;
}

export interface Manifesto {
  id?: string;
  numero: string;
  geradorId: string;
  transportadoraId: string;
  residuoId: string;
  quantidade: number;
  dataGeracao: string;
  prazoDescarte: string;
  status: StatusManifesto;
  observacoes?: string;
  createdAt?: string;
}

export interface ManifestoView extends Manifesto {
  gerador?: Gerador;
  transportadora?: Transportadora;
  residuo?: Residuo;
}

```

---

**Autenticação**

| Arquivo | Para falar no slide |
| --- | --- |
| [auth.service.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/services/auth.service.ts) | Login, logout, usuário logado e controle de perfil |
| [auth.guard.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/guards/auth.guard.ts) | Bloqueio de rotas para usuário não logado e admin |
| [login.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/login/login.ts) | Tela de login e validação do formulário |

```tsx
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable, retry } from 'rxjs';
import { Usuario } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  usuarioLogado = signal<Usuario | null>(JSON.parse(sessionStorage.getItem('usuario') ?? 'null'));

  private api = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(email: string, senha: string): Observable<boolean> {
    return this.http.get<Usuario[]>(`${this.api}/usuarios?email=${email}&senha=${senha}`).pipe(
      retry({ count: 3, delay: 700 }),
      map((usuarios) => usuarios[0] ?? null),
      tap((usuario) => {
        if (usuario) {
          sessionStorage.setItem('usuario', JSON.stringify(usuario));
          this.usuarioLogado.set(usuario);
        }
      }),
      map((usuario) => !!usuario),
    );
  }

  logout(): void {
    sessionStorage.removeItem('usuario');
    this.usuarioLogado.set(null);
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.usuarioLogado()?.perfil === 'admin';
  }

  isLoggedIn(): boolean {
    return !!this.usuarioLogado();
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.api}/usuarios`, usuario);
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.api}/usuarios`).pipe(retry({ count: 3, delay: 700 }));
  }

  excluirUsuario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/usuarios/${id}`);
  }
}

```

```tsx
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;

  router.navigate(['/login']);
  return false;
};

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAdmin()) return true;

  router.navigate(['/dashboard']);
  return false;
};

```

```tsx
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  form: FormGroup;
  ocultarSenha = true;
  carregando = false;
  erroLogin = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  entrar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.carregando = true;
    this.erroLogin = false;
    const { email, senha } = this.form.value;

    this.authService.login(email, senha).subscribe({
      next: (sucesso) => {
        this.carregando = false;
        if (sucesso) {
          this.router.navigate(['/dashboard']);
        } else {
          this.erroLogin = true;
        }
      },
      error: () => {
        this.carregando = false;
        this.erroLogin = true;
      },
    });
  }
}

```

---

**Services Do CRUD**

| Arquivo | Para falar no slide |
| --- | --- |
| [manifesto.service.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/services/manifesto.service.ts) | Regra principal: listar, criar, atualizar status, excluir, calcular prazo e gerar MTR |
| [gerador.service.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/services/gerador.service.ts) | CRUD de geradores |
| [transportadora.service.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/services/transportadora.service.ts) | CRUD de transportadoras |
| [residuo.service.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/services/residuo.service.ts) | CRUD de resíduos |
| [validacao.service.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/services/validacao.service.ts) | Validação e formatação de CNPJ |

```tsx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, retry, switchMap } from 'rxjs';
import { Manifesto, ManifestoView, ClasseResiduo, StatusManifesto } from '../models/models';
import { GeradorService } from './gerador.service';
import { TransportadoraService } from './transportadora.service';
import { ResiduoService } from './residuo.service';
import { environment } from '../../environments/environment';

const PRAZO_POR_CLASSE: Record<ClasseResiduo, number> = {
  I: 90,
  'II-A': 180,
  'II-B': 365,
};

@Injectable({ providedIn: 'root' })
export class ManifestoService {
  private api = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private geradorService: GeradorService,
    private transportadoraService: TransportadoraService,
    private residuoService: ResiduoService,
  ) {}

  calcularPrazoDescarte(dataGeracao: string, classeResiduo: ClasseResiduo): string {
    const dias = PRAZO_POR_CLASSE[classeResiduo];
    const data = new Date(dataGeracao);
    data.setDate(data.getDate() + dias);
    return data.toISOString().split('T')[0];
  }

  diasParaVencer(prazoDescarte: string): number {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const vencimento = new Date(prazoDescarte);
    const diff = vencimento.getTime() - hoje.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  listarComDetalhes(): Observable<ManifestoView[]> {
    return forkJoin({
      manifestos: this.http
        .get<Manifesto[]>(`${this.api}/manifestos`)
        .pipe(retry({ count: 3, delay: 700 })),
      geradores: this.geradorService.listar(),
      transportadoras: this.transportadoraService.listar(),
      residuos: this.residuoService.listar(),
    }).pipe(
      map(({ manifestos, geradores, transportadoras, residuos }) =>
        manifestos.map((m) => ({
          ...m,
          gerador: geradores.find((g) => String(g.id) === String(m.geradorId)),
          transportadora: transportadoras.find((t) => String(t.id) === String(m.transportadoraId)),
          residuo: residuos.find((r) => String(r.id) === String(m.residuoId)),
        })),
      ),
    );
  }

  listar(): Observable<Manifesto[]> {
    return this.http
      .get<Manifesto[]>(`${this.api}/manifestos`)
      .pipe(retry({ count: 3, delay: 700 }));
  }

  buscarPorId(id: string): Observable<Manifesto> {
    return this.http
      .get<Manifesto>(`${this.api}/manifestos/${id}`)
      .pipe(retry({ count: 3, delay: 700 }));
  }

  criar(manifesto: Manifesto): Observable<Manifesto> {
    return this.http.post<Manifesto>(`${this.api}/manifestos`, {
      ...manifesto,
      createdAt: new Date().toISOString(),
    });
  }

  atualizar(id: string, manifesto: Manifesto): Observable<Manifesto> {
    return this.http.put<Manifesto>(`${this.api}/manifestos/${id}`, manifesto);
  }

  atualizarStatus(id: string, status: StatusManifesto): Observable<Manifesto> {
    return this.http.patch<Manifesto>(`${this.api}/manifestos/${id}`, { status });
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/manifestos/${id}`);
  }

  criarNovo(dados: {
    geradorId: string;
    transportadoraId: string;
    residuoId: string;
    classeResiduo: ClasseResiduo;
    quantidade: number;
    dataGeracao: string;
    observacoes?: string;
  }): Observable<Manifesto> {
    return this.listar().pipe(
      switchMap((manifestos) => {
        const manifesto: Manifesto = {
          numero: this.gerarNumeroMTR(manifestos),
          geradorId: dados.geradorId,
          transportadoraId: dados.transportadoraId,
          residuoId: dados.residuoId,
          quantidade: Number(dados.quantidade),
          dataGeracao: dados.dataGeracao,
          prazoDescarte: this.calcularPrazoDescarte(dados.dataGeracao, dados.classeResiduo),
          status: 'pendente',
          observacoes: dados.observacoes,
        };

        return this.criar(manifesto);
      }),
    );
  }

  gerarNumeroMTR(manifestos: Manifesto[]): string {
    const ano = new Date().getFullYear();
    const ultimoNumero = manifestos.reduce((maior, manifesto) => {
      const numero = Number(manifesto.numero.split('-').pop() ?? 0);
      return numero > maior ? numero : maior;
    }, 0);
    const seq = String(ultimoNumero + 1).padStart(4, '0');
    return `MTR-${ano}-${seq}`;
  }
}

```

```tsx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Gerador } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GeradorService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(): Observable<Gerador[]> {
    return this.http.get<Gerador[]>(`${this.api}/geradores`).pipe(retry({ count: 3, delay: 700 }));
  }

  buscarPorId(id: string): Observable<Gerador> {
    return this.http
      .get<Gerador>(`${this.api}/geradores/${id}`)
      .pipe(retry({ count: 3, delay: 700 }));
  }

  criar(gerador: Gerador): Observable<Gerador> {
    return this.http.post<Gerador>(`${this.api}/geradores`, gerador);
  }

  atualizar(id: string, gerador: Gerador): Observable<Gerador> {
    return this.http.put<Gerador>(`${this.api}/geradores/${id}`, gerador);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/geradores/${id}`);
  }
}

```

```tsx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Transportadora } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TransportadoraService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(): Observable<Transportadora[]> {
    return this.http
      .get<Transportadora[]>(`${this.api}/transportadoras`)
      .pipe(retry({ count: 3, delay: 700 }));
  }

  buscarPorId(id: string): Observable<Transportadora> {
    return this.http
      .get<Transportadora>(`${this.api}/transportadoras/${id}`)
      .pipe(retry({ count: 3, delay: 700 }));
  }

  criar(transportadora: Transportadora): Observable<Transportadora> {
    return this.http.post<Transportadora>(`${this.api}/transportadoras`, transportadora);
  }

  atualizar(id: string, transportadora: Transportadora): Observable<Transportadora> {
    return this.http.put<Transportadora>(`${this.api}/transportadoras/${id}`, transportadora);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/transportadoras/${id}`);
  }
}

```

```tsx
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Residuo } from '../models/models';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ResiduoService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(): Observable<Residuo[]> {
    return this.http.get<Residuo[]>(`${this.api}/residuos`).pipe(retry({ count: 3, delay: 700 }));
  }

  buscarPorId(id: string): Observable<Residuo> {
    return this.http
      .get<Residuo>(`${this.api}/residuos/${id}`)
      .pipe(retry({ count: 3, delay: 700 }));
  }

  criar(residuo: Residuo): Observable<Residuo> {
    return this.http.post<Residuo>(`${this.api}/residuos`, residuo);
  }

  atualizar(id: string, residuo: Residuo): Observable<Residuo> {
    return this.http.put<Residuo>(`${this.api}/residuos/${id}`, residuo);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/residuos/${id}`);
  }
}

```

```tsx
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidacaoService {
  validarCNPJ(cnpj: string): boolean {
    const numeros = cnpj.replace(/\D/g, '');

    if (numeros.length !== 14) return false;
    if (/^(\d)\1+$/.test(numeros)) return false;

    const calcDigito = (parcial: string, pesos: number[]): number => {
      const soma = parcial.split('').reduce((acc, d, i) => acc + parseInt(d) * pesos[i], 0);
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };

    const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const d1 = calcDigito(numeros.slice(0, 12), pesos1);
    const d2 = calcDigito(numeros.slice(0, 13), pesos2);

    return d1 === parseInt(numeros[12]) && d2 === parseInt(numeros[13]);
  }

  cnpjValidator(control: AbstractControl): ValidationErrors | null {
    const valor = control.value ?? '';
    if (!valor) return null;
    return this.validarCNPJ(valor) ? null : { cnpjInvalido: true };
  }

  formatarCNPJ(cnpj: string): string {
    const n = cnpj.replace(/\D/g, '');
    return n.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
}

```

---

**Páginas Principais**

| Arquivo | Para falar no slide |
| --- | --- |
| [dashboard.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/dashboard/dashboard.ts) | Resumo dos manifestos e contadores |
| [manifestos.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/manifestos/manifestos.ts) | Tela mais importante: listagem, filtro, paginação, criação, status e exclusão |
| [geradores.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/geradores/geradores.ts) | Cadastro e edição de empresas geradoras |
| [transportadoras.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/transportadoras/transportadoras.ts) | Cadastro e edição de transportadoras |
| [residuos.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/residuos/residuos.ts) | Cadastro de resíduos, tipo, classe e prazo |
| [usuarios.ts](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/usuarios/usuarios.ts) | Cadastro de usuários, acessível para admin |

```tsx
import { Component, OnInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ManifestoService } from '../../services/manifesto.service';
import { ManifestoView } from '../../models/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule, MatCardModule, MatChipsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  private manifestos = signal<ManifestoView[]>([]);

  contadores = computed(() => {
    const lista = this.manifestos();
    return {
      pendentes: lista.filter((m) => m.status === 'pendente').length,
      transportados: lista.filter((m) => m.status === 'transportado').length,
      finalizados: lista.filter((m) => m.status === 'finalizado').length,
      vencendo: lista.filter((m) => {
        const dias = this.manifestoService.diasParaVencer(m.prazoDescarte);
        return m.status === 'pendente' && dias <= 30 && dias >= 0;
      }).length,
    };
  });

  manifestosAlerta = computed(() =>
    this.manifestos().filter((m) => {
      const dias = this.manifestoService.diasParaVencer(m.prazoDescarte);
      return m.status === 'pendente' && dias <= 30;
    }),
  );

  constructor(private manifestoService: ManifestoService) {}

  ngOnInit(): void {
    this.manifestoService.listarComDetalhes().subscribe((lista) => {
      this.manifestos.set(lista);
    });
  }

  getPrazoClass(prazo: string): string {
    const dias = this.manifestoService.diasParaVencer(prazo);
    if (dias < 0) return 'prazo-critico';
    if (dias <= 15) return 'prazo-atencao';
    return 'prazo-ok';
  }

  getDiasTexto(prazo: string): string {
    const dias = this.manifestoService.diasParaVencer(prazo);
    if (dias < 0) return `Vencido há ${Math.abs(dias)} dias`;
    if (dias === 0) return 'Vence hoje!';
    return `${dias} dias restantes`;
  }
}

```

```tsx
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ManifestoService } from '../../services/manifesto.service';
import { GeradorService } from '../../services/gerador.service';
import { TransportadoraService } from '../../services/transportadora.service';
import { ResiduoService } from '../../services/residuo.service';
import { ValidacaoService } from '../../services/validacao.service';
import {
  ManifestoView,
  Gerador,
  Transportadora,
  Residuo,
  StatusManifesto,
  TipoResiduo,
  ClasseResiduo,
} from '../../models/models';

@Component({
  selector: 'app-manifestos',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    DatePipe,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './manifestos.html',
  styleUrl: './manifestos.css',
})
export class ManifestosComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  colunas = ['numero', 'gerador', 'residuo', 'prazo', 'status', 'acoes'];
  dataSource = new MatTableDataSource<ManifestoView>([]);
  manifestos: ManifestoView[] = [];

  filtroStatus = '';
  carregando = true;
  mostrarFormulario = false;
  salvando = false;

  geradores: Gerador[] = [];
  transportadoras: Transportadora[] = [];
  residuos: Residuo[] = [];
  prazoCalculado = '';
  prazoTexto = '';

  stepGerador: FormGroup;
  stepResiduo: FormGroup;
  stepTransportadora: FormGroup;

  constructor(
    private fb: FormBuilder,
    private manifestoService: ManifestoService,
    private geradorService: GeradorService,
    private transportadoraService: TransportadoraService,
    private residuoService: ResiduoService,
    private validacao: ValidacaoService,
    private snack: MatSnackBar,
    private route: ActivatedRoute,
  ) {
    this.stepGerador = this.fb.group({ geradorId: ['', Validators.required] });
    this.stepResiduo = this.fb.group({
      residuoId: ['', Validators.required],
      quantidade: [null, [Validators.required, Validators.min(1)]],
      dataGeracao: ['', Validators.required],
      observacoes: [''],
    });
    this.stepTransportadora = this.fb.group({
      transportadoraId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.configurarFiltro();
    this.carregarOpcoes();
    this.carregarManifestos();

    if (this.route.snapshot.routeConfig?.path === 'manifestos/novo') {
      this.abrirFormulario();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  carregarManifestos(): void {
    this.carregando = true;

    this.manifestoService.listarComDetalhes().subscribe({
      next: (lista) => {
        this.manifestos = lista;
        this.filtrarManifestos();
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
        this.snack.open(
          'Erro ao carregar manifestos. Verifique se o JSON Server está ativo.',
          'OK',
          {
            duration: 4000,
          },
        );
      },
    });
  }

  carregarOpcoes(): void {
    this.geradorService.listar().subscribe((g) => (this.geradores = g));
    this.transportadoraService.listar().subscribe((t) => (this.transportadoras = t));
    this.residuoService.listar().subscribe((r) => (this.residuos = r));
  }

  filtrarManifestos(): void {
    const lista = this.filtroStatus
      ? this.manifestos.filter((m) => m.status === this.filtroStatus)
      : this.manifestos;

    this.dataSource.data = lista;
    this.dataSource.paginator?.firstPage();
  }

  aplicarFiltro(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valor.trim().toLowerCase();
    this.dataSource.paginator?.firstPage();
  }

  configurarFiltro(): void {
    this.dataSource.filterPredicate = (m: ManifestoView, filtro: string) => {
      const campos = [m.numero, m.gerador?.razaoSocial, m.residuo?.nome].join(' ').toLowerCase();
      return campos.includes(filtro);
    };
  }

  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.prazoCalculado = '';
    this.stepGerador.reset();
    this.stepResiduo.reset();
    this.stepTransportadora.reset();
  }

  fecharFormulario(): void {
    this.mostrarFormulario = false;
  }

  onResiduoChange(id: string): void {
    const residuo = this.residuos.find((r) => r.id === id);
    if (residuo) {
      const dataGeracao = this.stepResiduo.get('dataGeracao')?.value;
      if (dataGeracao) this.calcularPrazo();
    }
  }

  calcularPrazo(): void {
    const { residuoId, dataGeracao } = this.stepResiduo.value;
    const residuo = this.residuos.find((r) => r.id === residuoId);
    if (!residuo || !dataGeracao) return;
    this.prazoCalculado = this.manifestoService.calcularPrazoDescarte(
      dataGeracao,
      residuo.classe as ClasseResiduo,
    );
    const dias = this.manifestoService.diasParaVencer(this.prazoCalculado);
    this.prazoTexto = `${dias} dias para vencer`;
  }

  salvar(): void {
    if (this.stepGerador.invalid || this.stepResiduo.invalid || this.stepTransportadora.invalid) {
      this.stepGerador.markAllAsTouched();
      this.stepResiduo.markAllAsTouched();
      this.stepTransportadora.markAllAsTouched();
      return;
    }

    this.salvando = true;
    const { residuoId, quantidade, dataGeracao, observacoes } = this.stepResiduo.value;
    const residuo = this.residuos.find((r) => r.id === residuoId);

    if (!residuo) {
      this.salvando = false;
      this.snack.open('Selecione um resíduo válido.', 'OK', { duration: 3000 });
      return;
    }

    this.manifestoService
      .criarNovo({
        geradorId: this.stepGerador.value.geradorId,
        transportadoraId: this.stepTransportadora.value.transportadoraId,
        residuoId,
        classeResiduo: residuo.classe as ClasseResiduo,
        quantidade,
        dataGeracao,
        observacoes,
      })
      .subscribe({
        next: () => {
          this.salvando = false;
          this.fecharFormulario();
          this.carregarManifestos();
          this.snack.open('Manifesto criado com sucesso!', 'OK', { duration: 3000 });
        },
        error: () => {
          this.salvando = false;
          this.snack.open('Erro ao salvar. Tente novamente.', 'OK', { duration: 3000 });
        },
      });
  }

  atualizarStatus(manifesto: ManifestoView, status: StatusManifesto): void {
    this.manifestoService.atualizarStatus(manifesto.id!, status).subscribe({
      next: () => {
        this.carregarManifestos();
        this.snack.open(`Status atualizado para "${this.getStatusLabel(status)}"`, 'OK', {
          duration: 3000,
        });
      },
      error: () => this.snack.open('Erro ao atualizar status.', 'OK', { duration: 3000 }),
    });
  }

  excluir(manifesto: ManifestoView): void {
    if (!confirm(`Excluir o manifesto ${manifesto.numero}?`)) return;
    this.manifestoService.excluir(manifesto.id!).subscribe({
      next: () => {
        this.carregarManifestos();
        this.snack.open('Manifesto excluído.', 'OK', { duration: 3000 });
      },
      error: () => this.snack.open('Erro ao excluir manifesto.', 'OK', { duration: 3000 }),
    });
  }

  getStatusLabel(status?: string): string {
    const map: Record<string, string> = {
      pendente: 'Pendente',
      transportado: 'Transportado',
      finalizado: 'Finalizado',
    };
    return map[status ?? ''] ?? status ?? '';
  }

  getTipoLabel(tipo?: TipoResiduo): string {
    const map: Record<TipoResiduo, string> = {
      quimico: 'Químico',
      inflamavel: 'Inflamável',
      eletronico: 'Eletrônico',
    };
    return tipo ? map[tipo] : '';
  }

  getPrazoClass(prazo: string): string {
    const dias = this.manifestoService.diasParaVencer(prazo);
    if (dias < 0) return 'prazo-critico';
    if (dias <= 15) return 'prazo-atencao';
    return 'prazo-ok';
  }

  getDiasTexto(prazo: string): string {
    const dias = this.manifestoService.diasParaVencer(prazo);
    if (dias < 0) return `Vencido há ${Math.abs(dias)} dias`;
    if (dias === 0) return 'Vence hoje!';
    return `${dias} dias`;
  }

  formatarCNPJ(cnpj: string): string {
    return this.validacao.formatarCNPJ(cnpj);
  }
}

```

```tsx
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GeradorService } from '../../services/gerador.service';
import { ValidacaoService } from '../../services/validacao.service';
import { Gerador } from '../../models/models';

@Component({
  selector: 'app-geradores',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  templateUrl: './geradores.html',
  styleUrl: './geradores.css',
})
export class GeradoresComponent implements OnInit {
  geradores = signal<Gerador[]>([]);
  carregando = signal(true);
  form!: FormGroup;
  mostrarFormulario = false;
  editando = false;
  idEditando = '';
  salvando = false;

  constructor(
    private fb: FormBuilder,
    private geradorService: GeradorService,
    private validacao: ValidacaoService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      razaoSocial: ['', Validators.required],
      cnpj: ['', [Validators.required, this.validacao.cnpjValidator.bind(this.validacao)]],
      inscricaoEstadual: [''],
      endereco: ['', Validators.required],
      telefone: [''],
      email: ['', Validators.email],
      responsavel: [''],
    });
    this.carregar();
  }

  carregar(): void {
    this.carregando.set(true);
    this.geradorService.listar().subscribe({
      next: (lista) => {
        this.geradores.set(lista);
        this.carregando.set(false);
      },
      error: () => {
        this.carregando.set(false);
        this.snack.open('Erro ao carregar geradores. Verifique se o servidor está ativo.', 'OK', {
          duration: 4000,
        });
      },
    });
  }

  abrirFormulario(gerador?: Gerador): void {
    this.mostrarFormulario = true;
    this.editando = !!gerador;
    this.idEditando = gerador?.id ?? '';
    this.form.reset(gerador ? { ...gerador, cnpj: this.validacao.formatarCNPJ(gerador.cnpj) } : {});
  }

  fecharFormulario(): void {
    this.mostrarFormulario = false;
  }

  editar(gerador: Gerador): void {
    this.abrirFormulario(gerador);
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.salvando = true;
    const dados: Gerador = { ...this.form.value, cnpj: this.form.value.cnpj.replace(/\D/g, '') };

    const req = this.editando
      ? this.geradorService.atualizar(this.idEditando, dados)
      : this.geradorService.criar(dados);

    req.subscribe({
      next: () => {
        this.salvando = false;
        this.fecharFormulario();
        this.carregar();
        this.snack.open('Gerador salvo com sucesso!', 'OK', { duration: 3000 });
      },
      error: () => {
        this.salvando = false;
        this.snack.open('Erro ao salvar. Tente novamente.', 'OK', { duration: 3000 });
      },
    });
  }

  excluir(gerador: Gerador): void {
    if (!confirm(`Excluir "${gerador.razaoSocial}"?`)) return;
    this.geradorService.excluir(gerador.id!).subscribe({
      next: () => {
        this.carregar();
        this.snack.open('Gerador excluído.', 'OK', { duration: 3000 });
      },
      error: () => this.snack.open('Erro ao excluir.', 'OK', { duration: 3000 }),
    });
  }

  aplicarMascaraCNPJ(event: Event): void {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, '').slice(0, 14);
    valor = valor
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{2}\.\d{3})(\d)/, '$1.$2')
      .replace(/(\d{2}\.\d{3}\.\d{3})(\d)/, '$1/$2')
      .replace(/(\d{2}\.\d{3}\.\d{3}\/\d{4})(\d)/, '$1-$2');
    this.form.get('cnpj')?.setValue(valor, { emitEvent: false });
    input.value = valor;
  }

  formatarCNPJ(cnpj: string): string {
    return this.validacao.formatarCNPJ(cnpj);
  }
}

```

```tsx
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TransportadoraService } from '../../services/transportadora.service';
import { ValidacaoService } from '../../services/validacao.service';
import { Transportadora } from '../../models/models';

@Component({
  selector: 'app-transportadoras',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  templateUrl: './transportadoras.html',
  styleUrl: './transportadoras.css',
})
export class TransportadorasComponent implements OnInit {
  transportadoras = signal<Transportadora[]>([]);
  carregando = signal(true);
  form!: FormGroup;
  mostrarFormulario = false;
  editando = false;
  idEditando = '';
  salvando = false;

  constructor(
    private fb: FormBuilder,
    private transportadoraService: TransportadoraService,
    private validacao: ValidacaoService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      razaoSocial: ['', Validators.required],
      cnpj: ['', [Validators.required, this.validacao.cnpjValidator.bind(this.validacao)]],
      inscricaoEstadual: [''],
      licencaAmbientalNumero: [''],
      licencaAmbientalValidade: [''],
      telefone: [''],
      email: ['', Validators.email],
    });
    this.carregar();
  }

  carregar(): void {
    this.carregando.set(true);
    this.transportadoraService.listar().subscribe({
      next: (lista) => {
        this.transportadoras.set(lista);
        this.carregando.set(false);
      },
      error: () => {
        this.carregando.set(false);
        this.snack.open('Erro ao carregar. Verifique se o servidor está ativo.', 'OK', {
          duration: 4000,
        });
      },
    });
  }

  abrirFormulario(t?: Transportadora): void {
    this.mostrarFormulario = true;
    this.editando = !!t;
    this.idEditando = t?.id ?? '';
    this.form.reset(t ? { ...t, cnpj: this.validacao.formatarCNPJ(t.cnpj) } : {});
  }

  fecharFormulario(): void {
    this.mostrarFormulario = false;
  }

  editar(t: Transportadora): void {
    this.abrirFormulario(t);
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.salvando = true;
    const dados: Transportadora = {
      ...this.form.value,
      cnpj: this.form.value.cnpj.replace(/\D/g, ''),
    };

    const req = this.editando
      ? this.transportadoraService.atualizar(this.idEditando, dados)
      : this.transportadoraService.criar(dados);

    req.subscribe({
      next: () => {
        this.salvando = false;
        this.fecharFormulario();
        this.carregar();
        this.snack.open('Transportadora salva!', 'OK', { duration: 3000 });
      },
      error: () => {
        this.salvando = false;
        this.snack.open('Erro ao salvar.', 'OK', { duration: 3000 });
      },
    });
  }

  excluir(t: Transportadora): void {
    if (!confirm(`Excluir "${t.razaoSocial}"?`)) return;
    this.transportadoraService.excluir(t.id!).subscribe({
      next: () => {
        this.carregar();
        this.snack.open('Transportadora excluída.', 'OK', { duration: 3000 });
      },
      error: () => this.snack.open('Erro ao excluir.', 'OK', { duration: 3000 }),
    });
  }

  aplicarMascaraCNPJ(event: Event): void {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, '').slice(0, 14);
    valor = valor
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{2}\.\d{3})(\d)/, '$1.$2')
      .replace(/(\d{2}\.\d{3}\.\d{3})(\d)/, '$1/$2')
      .replace(/(\d{2}\.\d{3}\.\d{3}\/\d{4})(\d)/, '$1-$2');
    this.form.get('cnpj')?.setValue(valor, { emitEvent: false });
    input.value = valor;
  }

  formatarCNPJ(cnpj: string): string {
    return this.validacao.formatarCNPJ(cnpj);
  }
}

```

```tsx
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ResiduoService } from '../../services/residuo.service';
import { Residuo, TipoResiduo, ClasseResiduo } from '../../models/models';

const PRAZO: Record<ClasseResiduo, number> = { I: 90, 'II-A': 180, 'II-B': 365 };

@Component({
  selector: 'app-residuos',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  templateUrl: './residuos.html',
  styleUrl: './residuos.css',
})
export class ResiduosComponent implements OnInit {
  residuos = signal<Residuo[]>([]);
  carregando = signal(true);
  form!: FormGroup;
  mostrarFormulario = false;
  editando = false;
  idEditando = '';
  salvando = false;

  constructor(
    private fb: FormBuilder,
    private residuoService: ResiduoService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      classe: ['', Validators.required],
      unidadeMedida: [''],
      codigoIBAMA: [''],
    });
    this.carregar();
  }

  carregar(): void {
    this.carregando.set(true);
    this.residuoService.listar().subscribe({
      next: (lista) => {
        this.residuos.set(lista);
        this.carregando.set(false);
      },
      error: () => {
        this.carregando.set(false);
        this.snack.open('Erro ao carregar. Verifique se o servidor está ativo.', 'OK', {
          duration: 4000,
        });
      },
    });
  }

  abrirFormulario(r?: Residuo): void {
    this.mostrarFormulario = true;
    this.editando = !!r;
    this.idEditando = r?.id ?? '';
    this.form.reset(r ?? {});
  }

  fecharFormulario(): void {
    this.mostrarFormulario = false;
  }

  editar(r: Residuo): void {
    this.abrirFormulario(r);
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.salvando = true;
    const req = this.editando
      ? this.residuoService.atualizar(this.idEditando, this.form.value)
      : this.residuoService.criar(this.form.value);

    req.subscribe({
      next: () => {
        this.salvando = false;
        this.fecharFormulario();
        this.carregar();
        this.snack.open('Resíduo salvo!', 'OK', { duration: 3000 });
      },
      error: () => {
        this.salvando = false;
        this.snack.open('Erro ao salvar.', 'OK', { duration: 3000 });
      },
    });
  }

  excluir(r: Residuo): void {
    if (!confirm(`Excluir "${r.nome}"?`)) return;
    this.residuoService.excluir(r.id!).subscribe({
      next: () => {
        this.carregar();
        this.snack.open('Resíduo excluído.', 'OK', { duration: 3000 });
      },
      error: () => this.snack.open('Erro ao excluir.', 'OK', { duration: 3000 }),
    });
  }

  getPrazoDias(classe: ClasseResiduo): number {
    return PRAZO[classe] ?? 90;
  }

  getTipoLabel(tipo: TipoResiduo): string {
    const map: Record<TipoResiduo, string> = {
      quimico: 'Químico',
      inflamavel: 'Inflamável',
      eletronico: 'Eletrônico',
    };
    return map[tipo] ?? tipo;
  }

  getIcone(tipo: TipoResiduo): string {
    const map: Record<TipoResiduo, string> = {
      quimico: 'science',
      inflamavel: 'local_fire_department',
      eletronico: 'devices',
    };
    return map[tipo] ?? 'delete_sweep';
  }

  getAvatarClass(tipo: TipoResiduo): string {
    const map: Record<TipoResiduo, string> = {
      quimico: 'avatar-orange',
      inflamavel: 'avatar-red',
      eletronico: 'avatar-blue',
    };
    return map[tipo] ?? 'avatar-green';
  }
}

```

```tsx
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/models';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class UsuariosComponent implements OnInit {
  private authService = inject(AuthService);

  usuarios = signal<Usuario[]>([]);
  carregando = signal(true);
  form!: FormGroup;
  mostrarFormulario = false;
  salvando = false;
  colunas = ['nome', 'email', 'perfil', 'acoes'];

  usuarioAtual = this.authService.usuarioLogado();

  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      perfil: ['operador', Validators.required],
    });
    this.carregar();
  }

  carregar(): void {
    this.carregando.set(true);
    this.authService.listarUsuarios().subscribe({
      next: (lista) => {
        this.usuarios.set(lista.map((u) => ({ ...u, senha: '••••••' })));
        this.carregando.set(false);
      },
      error: () => {
        this.carregando.set(false);
        this.snack.open('Erro ao carregar usuários.', 'OK', { duration: 3000 });
      },
    });
  }

  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.form.reset({ perfil: 'operador' });
  }

  fecharFormulario(): void {
    this.mostrarFormulario = false;
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.salvando = true;
    this.authService.criarUsuario(this.form.value).subscribe({
      next: () => {
        this.salvando = false;
        this.fecharFormulario();
        this.carregar();
        this.snack.open('Usuário criado!', 'OK', { duration: 3000 });
      },
      error: () => {
        this.salvando = false;
        this.snack.open('Erro ao criar usuário.', 'OK', { duration: 3000 });
      },
    });
  }

  excluir(u: Usuario): void {
    if (u.id === this.usuarioAtual?.id) return;
    if (!confirm(`Excluir o usuário "${u.nome}"?`)) return;
    this.authService.listarUsuarios().subscribe((lista) => {
      const real = lista.find((x) => x.email === u.email);
      if (real?.id) {
        this.authService.excluirUsuario(real.id).subscribe({
          next: () => {
            this.carregar();
            this.snack.open('Usuário excluído.', 'OK', { duration: 3000 });
          },
          error: () => this.snack.open('Erro ao excluir.', 'OK', { duration: 3000 }),
        });
      }
    });
  }
}

```

---

**HTMLs Úteis Para Mostrar Fluxo**

| Arquivo | Para falar no slide |
| --- | --- |
| [manifestos.html](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/manifestos/manifestos.html) | Tabela, filtros, paginação e formulário em etapas |
| [dashboard.html](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/pages/dashboard/dashboard.html) | Cards de resumo e alertas |
| [shell.html](https://www.notion.so/c:/Users/lucas/OneDrive/Desktop/PROJETOS/FACULDADE/3%20-%20TERCEIRO%20SEMESTRE/projeto-integrador/pi/src/app/layout/shell/shell.html) | Menu lateral e navegação do sistema |

```html
<div class="page-container">
  <div class="page-header">
    <div>
      <h2>Manifestos de Transporte (MTR)</h2>
      <p>Gerencie todos os registros de transporte de resíduos</p>
    </div>
    <button mat-flat-button (click)="abrirFormulario()" id="btn-novo-manifesto" class="btn-primary">
      <mat-icon>add</mat-icon> Novo Manifesto
    </button>
  </div>

  <div class="filtros-bar">
    <mat-form-field appearance="outline" class="filtro-busca">
      <mat-label>Buscar</mat-label>
      <input
        matInput
        (input)="aplicarFiltro($event)"
        placeholder="Número, gerador, resíduo..."
        id="input-filtro"
      />
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>

    <mat-button-toggle-group
      [(ngModel)]="filtroStatus"
      (change)="filtrarManifestos()"
      class="status-toggle"
      id="toggle-status"
    >
      <mat-button-toggle value="">Todos</mat-button-toggle>
      <mat-button-toggle value="pendente">Pendentes</mat-button-toggle>
      <mat-button-toggle value="transportado">Transportados</mat-button-toggle>
      <mat-button-toggle value="finalizado">Finalizados</mat-button-toggle>
    </mat-button-toggle-group>
  </div>

  @if (carregando) {
    <mat-progress-bar mode="indeterminate" color="primary" />
  }

  <div class="table-card">
    <div class="table-responsive">
      <table mat-table [dataSource]="dataSource" matSort id="tabela-manifestos">
        <ng-container matColumnDef="numero">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Nº MTR</th>
          <td mat-cell *matCellDef="let m">
            <strong>{{ m.numero }}</strong>
          </td>
        </ng-container>

        <ng-container matColumnDef="gerador">
          <th mat-header-cell *matHeaderCellDef>Gerador</th>
          <td mat-cell *matCellDef="let m">{{ m.gerador?.razaoSocial }}</td>
        </ng-container>

        <ng-container matColumnDef="residuo">
          <th mat-header-cell *matHeaderCellDef>Resíduo</th>
          <td mat-cell *matCellDef="let m">
            <div class="residuo-cell">
              <mat-chip [class]="'chip-tipo chip-' + m.residuo?.tipo">
                {{ getTipoLabel(m.residuo?.tipo) }}
              </mat-chip>
              <span>{{ m.residuo?.nome }}</span>
            </div>
          </td>
        </ng-container>

        <ng-container matColumnDef="prazo">
          <th mat-header-cell *matHeaderCellDef>Prazo Descarte</th>
          <td mat-cell *matCellDef="let m">
            <div class="prazo-cell">
              <span>{{ m.prazoDescarte | date: 'dd/MM/yyyy' }}</span>
              @if (m.status === 'pendente') {
                <mat-chip [class]="'chip-dias ' + getPrazoClass(m.prazoDescarte)">
                  {{ getDiasTexto(m.prazoDescarte) }}
                </mat-chip>
              }
            </div>
          </td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Status</th>
          <td mat-cell *matCellDef="let m">
            <mat-chip [class]="'chip-status chip-' + m.status">
              {{ getStatusLabel(m.status) }}
            </mat-chip>
          </td>
        </ng-container>

        <ng-container matColumnDef="acoes">
          <th mat-header-cell *matHeaderCellDef>Ações</th>
          <td mat-cell *matCellDef="let m" class="acoes-cell">
            <button mat-icon-button [matMenuTriggerFor]="menu" [attr.id]="'btn-acoes-' + m.id">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menu="matMenu">
              <button
                mat-menu-item
                (click)="atualizarStatus(m, 'transportado')"
                [disabled]="m.status !== 'pendente'"
                [attr.id]="'btn-status-transportado-' + m.id"
              >
                <mat-icon>local_shipping</mat-icon> Marcar como Transportado
              </button>
              <button
                mat-menu-item
                (click)="atualizarStatus(m, 'finalizado')"
                [disabled]="m.status === 'finalizado'"
                [attr.id]="'btn-status-finalizado-' + m.id"
              >
                <mat-icon>check_circle</mat-icon> Finalizar
              </button>
              <mat-divider />
              <button
                mat-menu-item
                (click)="excluir(m)"
                class="btn-excluir"
                [attr.id]="'btn-excluir-' + m.id"
              >
                <mat-icon>delete</mat-icon> Excluir
              </button>
            </mat-menu>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="colunas"></tr>
        <tr mat-row *matRowDef="let row; columns: colunas" class="table-row"></tr>

        <tr class="mat-row" *matNoDataRow>
          <td class="mat-cell sem-dados" colspan="6">Nenhum manifesto encontrado.</td>
        </tr>
      </table>
    </div>

    <mat-paginator [pageSizeOptions]="[10, 25, 50]" pageSize="10" showFirstLastButtons />
  </div>
</div>

@if (mostrarFormulario) {
  <div class="dialog-overlay" (click)="fecharFormulario()">
    <div class="dialog-card" (click)="$event.stopPropagation()">
      <div class="dialog-header">
        <h3>Novo Manifesto de Transporte</h3>
        <button mat-icon-button (click)="fecharFormulario()" id="btn-fechar-dialog">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <mat-stepper [linear]="true" #stepper>
        <mat-step [stepControl]="stepGerador" label="Gerador">
          <form [formGroup]="stepGerador">
            <p class="step-hint">Selecione o gerador responsável pelo resíduo.</p>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Gerador</mat-label>
              <mat-select formControlName="geradorId" id="select-gerador">
                @for (g of geradores; track g.id) {
                  <mat-option [value]="g.id">
                    {{ g.razaoSocial }} — {{ formatarCNPJ(g.cnpj) }}
                  </mat-option>
                }
              </mat-select>
              <mat-error>Selecione um gerador</mat-error>
            </mat-form-field>
            <div class="step-actions">
              <button mat-flat-button matStepperNext class="btn-primary" id="btn-passo1-proximo">
                Próximo <mat-icon>arrow_forward</mat-icon>
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step [stepControl]="stepResiduo" label="Resíduo">
          <form [formGroup]="stepResiduo">
            <p class="step-hint">Informe os dados do resíduo gerado.</p>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Tipo de Resíduo</mat-label>
              <mat-select
                formControlName="residuoId"
                (selectionChange)="onResiduoChange($event.value)"
                id="select-residuo"
              >
                @for (r of residuos; track r.id) {
                  <mat-option [value]="r.id"> [Classe {{ r.classe }}] {{ r.nome }} </mat-option>
                }
              </mat-select>
              <mat-error>Selecione o resíduo</mat-error>
            </mat-form-field>

            <div class="form-row">
              <mat-form-field appearance="outline">
                <mat-label>Quantidade</mat-label>
                <input matInput type="number" formControlName="quantidade" id="input-quantidade" />
                <mat-error>Informe a quantidade</mat-error>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Data de Geração</mat-label>
                <input
                  matInput
                  type="date"
                  formControlName="dataGeracao"
                  (change)="calcularPrazo()"
                  id="input-data-geracao"
                />
                <mat-error>Informe a data</mat-error>
              </mat-form-field>
            </div>

            @if (prazoCalculado) {
              <div class="prazo-info">
                <mat-icon>event_available</mat-icon>
                <span
                  >Prazo máximo de descarte:
                  <strong>{{ prazoCalculado | date: 'dd/MM/yyyy' }}</strong></span
                >
                <mat-chip class="chip-prazo">{{ prazoTexto }}</mat-chip>
              </div>
            }

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Observações (opcional)</mat-label>
              <textarea
                matInput
                formControlName="observacoes"
                rows="2"
                id="textarea-obs"
              ></textarea>
            </mat-form-field>

            <div class="step-actions">
              <button mat-button matStepperPrevious id="btn-passo2-voltar">
                <mat-icon>arrow_back</mat-icon> Voltar
              </button>
              <button mat-flat-button matStepperNext class="btn-primary" id="btn-passo2-proximo">
                Próximo <mat-icon>arrow_forward</mat-icon>
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step [stepControl]="stepTransportadora" label="Transportadora">
          <form [formGroup]="stepTransportadora">
            <p class="step-hint">Selecione a transportadora responsável.</p>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Transportadora</mat-label>
              <mat-select formControlName="transportadoraId" id="select-transportadora">
                @for (t of transportadoras; track t.id) {
                  <mat-option [value]="t.id">
                    {{ t.razaoSocial }} — {{ formatarCNPJ(t.cnpj) }}
                  </mat-option>
                }
              </mat-select>
              <mat-error>Selecione uma transportadora</mat-error>
            </mat-form-field>

            <div class="step-actions">
              <button mat-button matStepperPrevious id="btn-passo3-voltar">
                <mat-icon>arrow_back</mat-icon> Voltar
              </button>
              <button
                mat-flat-button
                (click)="salvar()"
                [disabled]="salvando"
                class="btn-primary"
                id="btn-salvar-manifesto"
              >
                @if (salvando) {
                  <mat-progress-spinner diameter="20" mode="indeterminate" />
                } @else {
                  <ng-container><mat-icon>save</mat-icon> Salvar Manifesto</ng-container>
                }
              </button>
            </div>
          </form>
        </mat-step>
      </mat-stepper>
    </div>
  </div>
}

```

```html
<div class="page-container">
  <div class="page-header">
    <h2>Dashboard</h2>
    <p>Visão geral do sistema de gestão de resíduos</p>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon icon-pendente">
        <mat-icon>hourglass_empty</mat-icon>
      </div>
      <div class="stat-info">
        <span class="stat-value">{{ contadores().pendentes }}</span>
        <span class="stat-label">Pendentes</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon icon-transportado">
        <mat-icon>local_shipping</mat-icon>
      </div>
      <div class="stat-info">
        <span class="stat-value">{{ contadores().transportados }}</span>
        <span class="stat-label">Transportados</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon icon-finalizado">
        <mat-icon>check_circle</mat-icon>
      </div>
      <div class="stat-info">
        <span class="stat-value">{{ contadores().finalizados }}</span>
        <span class="stat-label">Finalizados</span>
      </div>
    </div>

    <div class="stat-card">
      <div class="stat-icon icon-vencendo">
        <mat-icon>warning</mat-icon>
      </div>
      <div class="stat-info">
        <span class="stat-value">{{ contadores().vencendo }}</span>
        <span class="stat-label">Vencendo em breve</span>
      </div>
    </div>
  </div>

  @if (manifestosAlerta().length > 0) {
    <div class="alertas-section">
      <h3><mat-icon>warning_amber</mat-icon> Atenção: Prazos Críticos</h3>
      @for (m of manifestosAlerta(); track m.id) {
        <div class="alerta-item">
          <mat-icon class="alerta-icon">schedule</mat-icon>
          <div class="alerta-info">
            <strong>{{ m.numero }}</strong> — {{ m.residuo?.nome }}
            <span class="alerta-gerador">Gerador: {{ m.gerador?.razaoSocial }}</span>
          </div>
          <mat-chip [class]="'chip-prazo ' + getPrazoClass(m.prazoDescarte)">
            {{ getDiasTexto(m.prazoDescarte) }}
          </mat-chip>
        </div>
      }
    </div>
  }

  <div class="acoes-rapidas">
    <h3>Ações Rápidas</h3>
    <div class="acoes-grid">
      <button
        mat-flat-button
        routerLink="/manifestos/novo"
        id="btn-novo-manifesto"
        class="acao-btn acao-primary"
      >
        <mat-icon>add_circle</mat-icon>
        Novo Manifesto
      </button>
      <button mat-stroked-button routerLink="/geradores" id="btn-ir-geradores" class="acao-btn">
        <mat-icon>business</mat-icon>
        Geradores
      </button>
      <button
        mat-stroked-button
        routerLink="/transportadoras"
        id="btn-ir-transportadoras"
        class="acao-btn"
      >
        <mat-icon>local_shipping</mat-icon>
        Transportadoras
      </button>
      <button mat-stroked-button routerLink="/residuos" id="btn-ir-residuos" class="acao-btn">
        <mat-icon>delete_sweep</mat-icon>
        Resíduos
      </button>
    </div>
  </div>
</div>

```

```html
<mat-sidenav-container class="sidenav-container">
  <mat-sidenav #sidenav mode="side" opened class="sidenav">
    <div class="sidenav-header">
      <div class="brand">
        <mat-icon class="brand-icon">eco</mat-icon>
        <span class="brand-name">EcoTrack</span>
      </div>
      <p class="brand-sub">Gestão de Resíduos</p>
    </div>

    <nav class="sidenav-nav">
      <a mat-list-item routerLink="/dashboard" routerLinkActive="active-link" id="nav-dashboard">
        <mat-icon matListItemIcon>dashboard</mat-icon>
        <span matListItemTitle>Dashboard</span>
      </a>
      <a mat-list-item routerLink="/manifestos" routerLinkActive="active-link" id="nav-manifestos">
        <mat-icon matListItemIcon>description</mat-icon>
        <span matListItemTitle>Manifestos (MTR)</span>
      </a>
      <a mat-list-item routerLink="/geradores" routerLinkActive="active-link" id="nav-geradores">
        <mat-icon matListItemIcon>business</mat-icon>
        <span matListItemTitle>Geradores</span>
      </a>
      <a
        mat-list-item
        routerLink="/transportadoras"
        routerLinkActive="active-link"
        id="nav-transportadoras"
      >
        <mat-icon matListItemIcon>local_shipping</mat-icon>
        <span matListItemTitle>Transportadoras</span>
      </a>
      <a mat-list-item routerLink="/residuos" routerLinkActive="active-link" id="nav-residuos">
        <mat-icon matListItemIcon>delete_sweep</mat-icon>
        <span matListItemTitle>Resíduos</span>
      </a>

      @if (isAdmin()) {
        <div class="nav-divider"></div>
        <p class="nav-section-label">Administração</p>
        <a mat-list-item routerLink="/usuarios" routerLinkActive="active-link" id="nav-usuarios">
          <mat-icon matListItemIcon>manage_accounts</mat-icon>
          <span matListItemTitle>Usuários</span>
        </a>
      }
    </nav>

    <div class="sidenav-footer">
      <div class="user-info">
        <mat-icon>account_circle</mat-icon>
        <div>
          <p class="user-name">{{ usuario()?.nome }}</p>
          <p class="user-role">
            {{ usuario()?.perfil === 'admin' ? 'Administrador' : 'Operador' }}
          </p>
        </div>
      </div>
      <button mat-icon-button (click)="sair()" id="btn-logout" matTooltip="Sair">
        <mat-icon>logout</mat-icon>
      </button>
    </div>
  </mat-sidenav>

  <mat-sidenav-content class="main-content">
    <router-outlet />
  </mat-sidenav-content>
</mat-sidenav-container>

```

Para slides, eu seguiria esta ordem: `db.json` → `models.ts` → `services` → `routes/guards` → `manifestos.ts` → `dashboard.ts` → demais CRUDs.