import { HttpClient, HttpHeaders } from '@angular/common/http'
import { lastValueFrom } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Administrador } from '../models/administrador'
import { Paginacao } from '../models/paginacao'
import { LocalServico } from './localServico'

export class AdministradorServico{
  constructor(private http: HttpClient) { }

  public async todos(pagina:Number) {
    // return await this.http.get<Paginacao>(`${environment.administradoresAPI}/administradores?page=${pagina}`, { headers: new HttpHeaders({authorization: `Bearer ${LocalServico.getToken()}`})}).toPromise()
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikpvw6NvIFBhdWxvIEdoaXNzYXJkaSBkYSBTaWx2YSIsInJvbGUiOiJhZG1pbmlzdHJhZG9yIiwibmJmIjoxNjY0OTE0MDQwLCJleHAiOjE2NjQ5MjQ4NDAsImlhdCI6MTY2NDkxNDA0MH0.vdRmGRzsWrqZjA2qWoAsw1M7tRI_VZ5W9U_pTqQzns4"
    return await lastValueFrom(this.http.get<Paginacao>('https://localhost:5003/administradores' , { headers: new HttpHeaders({authorization: `Bearer ${token}`})}))
  }

  public async logar(administrador:Administrador) {
    return await this.http.post<Administrador>(`${environment.administradoresAPI}/administradores/login`, administrador, { headers: new HttpHeaders({authorization: `Bearer ${LocalServico.getToken()}`})}).toPromise()
  }
}