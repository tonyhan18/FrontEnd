using BlazroServerMaster.Interfaces;
using BlazroServerMaster.Models;
using Humanizer.DateTimeHumanizeStrategy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlazroServerMaster.Services
{
    public class GangnamguPopulationService : IDatabase<GangnamguPopulation>
    {
        private readonly BlazorServerDbContext? _context;

        public GangnamguPopulationService(BlazorServerDbContext context)
        {
            this._context = context;
        }

        private void isDbNull()
        {
            if (_context?.GangnamguPopulations == null)
            {
                throw new NullReferenceException();
            }
        }

        public void Create(GangnamguPopulation entity)
        {
            isDbNull();

            this._context.GangnamguPopulations.Add(entity);
            this._context?.SaveChanges();        
        }

        public void Delete(int? id)
        {
            isDbNull();

            var validData = this._context.GangnamguPopulations.Find(id);

            if (validData != null)
            {
                this._context.GangnamguPopulations.Remove(validData);
                this._context.SaveChanges();
            }
        }

        public async Task<List<GangnamguPopulation>> GetAsync()
        {
            isDbNull();
            return await this._context.GangnamguPopulations.ToListAsync();
        }

        public GangnamguPopulation GetDetail(int? id)
        {
            isDbNull();
            if (id == null)
            {
                throw new NullReferenceException();
            }


            var validData = this._context.GangnamguPopulations.FirstOrDefault(x => x.Id == id);

            if (validData != null)
            {
                return validData;
            }
            else 
            {
                throw new InvalidOperationException();
            }
        }

        public void Update(int? id, GangnamguPopulation entity)
        {
            isDbNull();
            if (id == null)
            {
                throw new NullReferenceException();
            }

            var validData = this._context.GangnamguPopulations.FirstOrDefault(x => x.Id == id);
            
            if (validData != null)
            {
                this._context.GangnamguPopulations.Update(entity);
                this._context.SaveChanges();
            }
            else
            {
                throw new InvalidOperationException();
            }
        }
    }
}
